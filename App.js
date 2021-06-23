import {
  createAppContainer
} from 'react-navigation';
import {
  createStackNavigator
} from 'react-navigation-stack';

// Screens import
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Bussiness Search'
  }
})

export default createAppContainer(navigator);