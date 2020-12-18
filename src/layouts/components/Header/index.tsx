import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {Box} from '../../../components/Box';
import Bars from '../../../assets/Bars';
import useMenu from '../Sidebar/hooks';

export default () => {
  const [sidebar, onChanges]: any = useMenu();
  console.log(sidebar);
  return (
    <React.Fragment>
      <Box
        style={{width: '100%'}}
        flexDirection={{
          xs: 'column-reverse',
          s: 'column-reverse',
          md: 'column-reverse',
          lg: 'column-reverse',
          xl: 'row',
        }}>
        <Box
          py={{xs: 16, s: 16, md: 16, lg: 16}}
          style={{
            padding: 48,
            flexWrap: 'wrap',
            marginLeft: '-0.5rem',
            marginRight: '-0.5rem',
            flex: 1,
          }}>
          <Box style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
                Dashboard
              </Text>
              <Text style={{color: 'rgb(82, 114, 125)'}}>
                Hello Ibn Basri Welcome back {''}
              </Text>
            </View>
          </Box>
        </Box>
        <Box
          borderLeftWidth={{xs: 0, s: 0, md: 0, lg: 0, xl: 1}}
          width={{xs: '100%', s: '100%', md: '100%', lg: '100%', xl: 380}}
          style={{
            borderLeftColor: '#E4E4E4',
            padding: 40,
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity onPress={onChanges}>
              <Box display={{lg: 'none', xl: 'none'}}>
                <Bars />
              </Box>
            </TouchableOpacity>
            <View>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: '#f7f6f4',
                  borderRadius: 8,
                }}
              />
            </View>
          </View>
        </Box>
      </Box>
    </React.Fragment>
  );
};
