/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'

import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'

import ProjectsScreen from '../screens/ProjectsScreen'
import ToDoScreen from '../screens/ToDoScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import SplashScreen from '../screens/SplashScreen'

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Splash'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ title: 'Sign In' }}
        name='SignIn'
        component={SignInScreen}
      />
      <Stack.Screen
        options={{ title: 'Sign Up' }}
        name='SignUp'
        component={SignUpScreen}
      />
      <Stack.Screen name='Home' component={ProjectsScreen} />
      <Stack.Screen name='ToDoScreen' component={ToDoScreen} />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  )
}
