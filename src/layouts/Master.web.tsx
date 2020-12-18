import React from 'react';
import {View, Text} from 'react-native';
import {Box} from '../components/Box';
import {ThemeContext} from '../App';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

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
            <Header />
            <View style={{flex: 1, flexDirection: 'row'}}>
              {children}
              <Box
                display={{xs: 'none', s: 'none', md: 'none', lg: 'none'}}
                style={{
                  width: 380,
                  borderLeftWidth: 1,
                  borderLeftColor: '#E4E4E4',
                  padding: 40,
                }}>
                <View style={{marginBottom: 16}}>
                  <Text style={{marginBottom: 12, fontWeight: '600'}}>
                    Wallet
                  </Text>
                  <View
                    style={{
                      padding: 24,
                      backgroundColor: '#aaead0',
                      borderRadius: 10,
                      height: 155,
                    }}>
                    <Text style={{marginBottom: 18}}>Saepudin</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      Rp250.000
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={{fontWeight: '600'}}>Task Progress</Text>
                </View>
              </Box>
            </View>
          </Box>
        </View>
      </View>
    </View>
  );
};
