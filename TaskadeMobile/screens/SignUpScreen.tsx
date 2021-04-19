import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import { useMutation, gql } from '@apollo/client'

const SIGN_UP_MUTATION = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signUp(input: { email: $email, password: $password, name: $name }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

const SignUpScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  //mutation[0] : A function to trigger the mutation
  // mutation[1] : result object
  // { data, error, loading}
  const [signup, { data, error, loading }] = useMutation(SIGN_UP_MUTATION)

  console.log(data)
  console.log(error)

  if (error) {
    Alert.alert('Error signing up. Try Again')
  }

  if (data) {
    // save token
    AsyncStorage.setItem('token', data.signUp.token).then(() => {
      //redirect home
      navigation.navigate('Home')
    })
  }

  const onSubmit = () => {
    signup({ variables: { name, email, password } })
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder='name'
        value={name}
        onChangeText={setName}
        style={{
          color: 'white',
          fontSize: 18,
          width: '100%',
          marginVertical: 25,
        }}
      />
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
        style={{
          backgroundColor: 'red',
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        {loading && <ActivityIndicator />}
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Sign Up
        </Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('SignIn')}
        disabled={loading}
        style={{
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <Text style={{ color: '#e33062', fontSize: 18, fontWeight: 'bold' }}>
          Already have an account? Sign In
        </Text>
      </Pressable>
    </View>
  )
}

export default SignUpScreen
