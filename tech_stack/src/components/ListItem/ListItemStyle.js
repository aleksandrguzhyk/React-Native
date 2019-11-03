import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    paddingLeft: 15,
    paddingVertical: 10
  },
  description: {
    marginHorizontal: 8,
    paddingVertical: 10
  }

})