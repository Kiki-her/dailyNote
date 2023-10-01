import {
    NavigationContainer,
  } from '@react-navigation/native';
  import {
    createStackNavigator,
  } from '@react-navigation/stack';
import TitleMenu from './TitleMenu';
import ContentPage from './ContentPage';

  const Root = createStackNavigator();
export default function AppNavi() {
    return (
        <NavigationContainer>
          <Root.Navigator>
            <Root.Screen name="Home" component={TitleMenu} />
            <Root.Screen name="Content" component={ContentPage} />
          </Root.Navigator>
        </NavigationContainer>
      );
}