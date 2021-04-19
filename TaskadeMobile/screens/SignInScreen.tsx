import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useMutation, gql } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const [signIn, { data, error, loading }] = useMutation(SIGN_IN_MUTATION)

  useEffect(() => {
    if (error) {
      Alert.alert('Invalid Credentials. Try again')
    }
  }, [error])

  if (data) {
    // save token
    AsyncStorage.setItem('token', data.signIn.token).then(() => {
      //redirect home
      navigation.navigate('Home')
    })
  }

  const onSubmit = () => {
    signIn({ variables: { email, password } })
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder='sdfs@dsfs.com'
        value={email}
        onChangeText={setEmail}
        style={{
          color: 'white',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
      <TextInput
        placeholder='password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          color: 'white',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
      <Pressable
        onPress={onSubmit}
        disabled={loading}
        style={{
          backgroundColor: 'red',
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Sign In
        </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('SignUp')}
        style={{
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <Text style={{ color: '#e33062', fontSize: 18, fontWeight: 'bold' }}>
          New here? Sign Up
        </Text>
      </Pressable>
    </View>
  )
}

export default SignInScreen
