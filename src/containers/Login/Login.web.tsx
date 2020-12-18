import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Box} from '../../components/Box';

export default () => (
  <View style={{flex: 1, backgroundColor: '#FFF'}}>
    <View style={{flexDirection: 'row', flex: 1}}>
      <Box
        flex={{xs: 1, s: 1, md: 1, lg: 1, xl: 0.25}}
        style={{
          paddingVertical: 64,
          paddingHorizontal: 52,
          justifyContent: 'space-evenly',
        }}>
        <Text style={{marginBottom: 40}}>Login</Text>

        <View style={{flex: 0.5}}>
          <View style={{marginBottom: 20}}>
            <TextInput
              placeholder="username"
              style={{padding: 10, backgroundColor: 'aqua'}}
            />
          </View>
          <View style={{marginBottom: 20}}>
            <TextInput
              placeholder="password"
              style={{padding: 10, backgroundColor: 'aqua'}}
            />
          </View>
          <View>
            <TouchableOpacity style={{padding: 8, backgroundColor: 'green'}}>
              Login
            </TouchableOpacity>
          </View>
        </View>
      </Box>
      <Box
        flex={1}
        display={{xs: 'none', s: 'none', md: 'none'}}
        style={{backgroundColor: '#709fb0'}}
      />
    </View>
  </View>
);
