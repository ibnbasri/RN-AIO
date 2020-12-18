import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../App';
import {Box} from '../../components/Box';
import {useRoute} from '@react-navigation/native';
import Home from '../../assets/calendar';
import useMenu from '../../layouts/components/Sidebar/hooks';

export default () => {
  const themes: any = React.useContext(ThemeContext);
  const [sidebar, onChanges] = useMenu();
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
              style={{marginBottom: 20}}
              width={{xs: '100%', s: '100%', md: '100%', lg: '100%', xl: '50%'}}
              paddingLeft="m"
              paddingRight="m">
              <Box style={{backgroundColor: '#726a95', padding: 28}} />
            </Box>
            <Box
              width={{xs: '100%', s: '100%', md: '100%', lg: '100%', xl: '50%'}}
              paddingRight="m"
              paddingLeft="m">
              <Box style={{backgroundColor: '#726a95', padding: 28}}>
                <Text>Bernilai {sidebar}</Text>
              </Box>
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
