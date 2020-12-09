import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../App';
import {Box} from '../../components/Box';
import {useRoute} from '@react-navigation/native';

export default () => {
  const themes: any = React.useContext(ThemeContext);
  const route = useRoute();
  return (
    <View style={[styles.container, {backgroundColor: '#FFF'}]}>
      <View style={[styles.papper, styles.container]}>
        <Box
          paddingLeft="s"
          paddingRight="s"
          style={{
            marginBottom: 32,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{route.name}</Text>
        </Box>
        <Box style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Box
            width="100%"
            style={{marginBottom: 16}}
            paddingRight="s"
            paddingLeft="s">
            <Box style={{backgroundColor: '#EAEBF17A', padding: 28}} />
          </Box>

          <Box
            width={cardInformation}
            paddingRight="s"
            paddingLeft="s"
            style={{marginBottom: 16}}>
            <Box
              style={{padding: 28, backgroundColor: themes.colors.gingger}}
            />
          </Box>

          <Box width={cardInformation} paddingLeft="s" paddingRight="s">
            <Box style={{padding: 28, backgroundColor: themes.colors.tree}} />
          </Box>
        </Box>
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
