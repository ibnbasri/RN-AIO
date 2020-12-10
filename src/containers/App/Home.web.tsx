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
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{route.name}</Text>
            <View
              style={{
                padding: 8,
                backgroundColor: '#F3F4FA',
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{marginRight: 8}}>
                <Home />
              </View>
              <Text style={{marginRight: 8}}>
                {new Date().toJSON().slice(0, 10).replace(/-/g, '/')}
              </Text>
            </View>
          </Box>

          <Box style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Box
              width="100%"
              style={{marginBottom: 16}}
              paddingRight="m"
              paddingLeft="m">
              <Box
                style={{backgroundColor: themes.colors.green, padding: 28}}
              />
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
