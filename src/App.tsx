import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from './theme';
export const ThemeContext = React.createContext({});
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Layout from './layouts/Master.web';
import Home from './containers/App/Home.web';

export default function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Layout>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Layout>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
