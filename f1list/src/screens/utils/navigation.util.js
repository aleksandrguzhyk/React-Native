import { createStackNavigator, createAppContainer } from 'react-navigation'
import App from '../../../App'
import F1Drivers from '../F1Drivers/F1Drivers'

const MainNavigator = createStackNavigator({
  App: {
    screen: App,
    // navigationOptions: {
    //   // swipeEnabled: false,
    //   gesturesEnabled: false
    // }
  },
  F1Drivers: {
    screen: F1Drivers,
    // navigationOptions: {
    //   // gesturesEnabled: false
    // }
  }
}, {
    headerMode: 'none',
    header: null,
    navigationOptions: {
      header: null
    },
    initialRouteName: 'App'
  })

export default createAppContainer(MainNavigator)
