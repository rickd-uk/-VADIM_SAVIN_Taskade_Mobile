import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native'
import { View } from '../components/Themed'

import { useQuery, gql } from '@apollo/client'

const MY_PROJECTS = gql`
  query myTaskLists {
    myTaskLists {
      id
      title
      createdAt
    }
  }
`

import ProjectItem from '../components/ProjectItem'

export default function ProjectsScreen() {
  const [projects, setProjects] = useState([])

  const { data, error, loading } = useQuery(MY_PROJECTS)

  useEffect(() => {
    if (error) Alert.alert(`Error fetching projects ${error.message}`)
  }, [error])

  useEffect(() => {
    if (data) setProjects(data.myTaskLists)
  }, [data])

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={projects}
        renderItem={({ item }) => <ProjectItem project={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
