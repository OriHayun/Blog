import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/createScreen';
import EditScreen from './src/screens/editScreen';
import { Provider } from './src/contex/blogContext';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen, 
  Edit:EditScreen
},
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F4B6C2'
      }
    }
  });

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>


  );
}