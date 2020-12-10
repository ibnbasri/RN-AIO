import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../App';
import {Box} from '../../components/Box';
import {useRoute} from '@react-navigation/native';
import Home from '../../assets/calendar';

export default () => {
  const themes: any = React.useContext(ThemeContext);
  const route = useRoute();

  return (
    <View style={[styles.container, {backgroundColor: '#FFF', padding: 16}]}>
      <View style={[styles.papper, styles.container]}>
        <View
          style={{
            flexWrap: 'wrap',
            marginRight: '-0.5rem',
            marginLeft: '-0.5rem',
          }}>
          <Box
            paddingLeft="m"
            paddingRight="m"
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 32,
            }}>
            <View>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
                {route.name}
              </Text>
              <Text style={{color: 'rgb(82, 114, 125)'}}>
                Hello Ibn Basri Wellcome back{' '}
              </Text>
            </View>
            <View
              style={{
                padding: 8,
                backgroundColor: '#F3F4FA',
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{marginHorizontal: 8}}>
                Today is {''}
                {new Date().toLocaleString('id-ID', {weekday: 'long'})}
              </Text>
              <View style={{marginRight: 8}}>
                <Home />
              </View>
            </View>
          </Box>

          <Box style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
            <Box
              width="100%"
              style={{marginBottom: 20}}
              paddingRight="m"
              paddingLeft="m">
              <Box
                style={{backgroundColor: themes.colors.green, padding: 28}}
              />
            </Box>
            <Box
              width={{xs: '100%', s: '100%', md: '100%', lg: '100%', xl: '50%'}}
              paddingLeft="m"
              paddingRight="m">
              <Box style={{backgroundColor: '#726a95', padding: 28}} />
            </Box>
            <Box
              width={{xs: '100%', s: '100%', md: '100%', lg: '100%', xl: '50%'}}
              paddingRight="m"
              paddingLeft="m">
              <Box style={{backgroundColor: '#726a95', padding: 28}} />
            </Box>
          </Box>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  papper: {
    backgroundColor: 'white',
    margin: 20,
  },
});

const cardInformation = {
  xs: '100%',
  s: '100%',
  md: '50%',
  lg: '33.333333%',
  xl: '33.333333%',
};
