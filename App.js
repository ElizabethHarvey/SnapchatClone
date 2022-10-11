import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import AppNavigator from './navigation/AppNavigator';
import MyBitmoji from './components/MyBitmoji';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={AppNavigator} options={{
                headerShown: false,
              }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
