import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from './theme';
import {createStackNavigator} from '@react-navigation/stack';
import Web from './navigation/web';
import linking from './navigation/linking.web';
import LoginWeb from './containers/Login/Login.web';
const Stack = createStackNavigator();
export const ThemeContext = React.createContext({});

export default function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={Web} />
          <Stack.Screen name="Login" component={LoginWeb} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
