import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons'

interface ProjectItemProps {
  project: {
    id: string
    title: string
    createdAt: string
  }
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('ToDoScreen', { id: project.id })
  }
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name='file-outline' size={24} color='grey'></MaterialCommunityIcons>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.time}>{project.createdAt}</Text>
      </View>
    </Pressable>
  )
}

export default ProjectItem
