import React from 'react';
import Home from '../containers/App/Home.web';
import {createStackNavigator} from '@react-navigation/stack';
import Layout from '../layouts/Master.web';
import Settings from '../containers/Settings';
const Stack = createStackNavigator();

export default () => {
  return (
    <Layout>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </Layout>
  );
};
