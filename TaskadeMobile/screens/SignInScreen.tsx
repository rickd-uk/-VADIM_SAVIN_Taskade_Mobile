import React, { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const onSubmit = () => {
    // submit
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
