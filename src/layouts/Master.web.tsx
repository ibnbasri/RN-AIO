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
    <View style={{flex: 1, backgroundColor: '#FFFF', zIndex: 3500}}>
      <View
        style={{
          flexDirection: 'row',
          flexGrow: 1,
          zIndex: 1500,
        }}>
        <Sidebar />
        <View style={{flex: 1, backgroundColor: '#FFFF', zIndex: 5000}}>
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
                      backgroundColor: '#559584',
                      borderRadius: 8,
                      height: 145,
                      zIndex: 1030,
                    }}>
                    <Text style={{color: 'white', marginBottom: 18}}>
                      Saepudin
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 17,
                      }}>
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
