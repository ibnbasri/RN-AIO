import React from 'react';
import {View, Text} from 'react-native';
import {Box} from '../components/Box';
import {ThemeContext} from '../App';
import Sidebar from './components/Sidebar';

interface IProps {
  children: React.ReactNode;
}

export default ({children}: IProps) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFF'}}>
      <View
        style={{
          flexDirection: 'row',
          flexGrow: 1,
        }}>
        <Sidebar />
        <View style={{flex: 1, backgroundColor: '#FFFF'}}>
          <Box
            style={{flex: 1}}
            width="100%"
            maxWidth={{xs: '100%', s: '100%', md: '100%', lg: 1024, xl: 1280}}>
            {children}
          </Box>
        </View>
        <View
          style={{
            width: 380,
            borderLeftWidth: 1,
            borderLeftColor: '#E4E4E4',
            padding: 40,
          }}>
          <Text>Hello</Text>
        </View>
      </View>
    </View>
  );
};
