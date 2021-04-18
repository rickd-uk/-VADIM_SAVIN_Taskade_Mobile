import React, { useState } from 'react'
import { StyleSheet, FlatList, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import ToDoItem from '../components/ToDoItem'

import { Text, View } from '../components/Themed'

let id = '4'

export default function ToDoScreen() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([
    {
      id: '1',
      content: 'Buy Milk',
      isCompleted: true,
    },
    {
      id: '2',
      content: 'Buy Porridge',
      isCompleted: false,
    },
    {
      id: '3',
      content: 'Pour milk',
      isCompleted: false,
    },
  ])

  const createNewItem = (atIndex: number) => {
    const newTodos = [...todos]
    newTodos.splice(atIndex, 0, {
      id: id,
      content: '',
      isCompleted: false,
    })
    setTodos(newTodos)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 130 : 0}
      style={styles.container}>
      <TextInput value={title} onChangeText={setTitle} placeholder={'Title'} style={styles.title} />
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <ToDoItem todo={item} onSubmit={() => createNewItem(index + 1)} />
        )}
        style={{ width: '100%' }}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  title: {
    color: 'white',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
})
