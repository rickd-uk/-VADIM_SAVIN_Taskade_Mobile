import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  root: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },

  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#404040',
    marginRight: 10,
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    color: 'white',
  },

  time: {
    marginLeft: 15,
    color: 'darkgrey',
  },
})

export default styles
