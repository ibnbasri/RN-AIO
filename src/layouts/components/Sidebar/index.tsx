import React from 'react';
import {View, Text, Button, TouchableOpacity, Animated} from 'react-native';
import {Box} from '../../../components/Box';
import {ThemeContext} from '../../../App';
import useMenu from './hooks';
import useDimensions from '../../../components/hooks/useDimension';
import {Link} from '@react-navigation/native';
import {useLinkTo} from '@react-navigation/native';

export default () => {
  const theme: any = React.useContext(ThemeContext);
  const linkTo = useLinkTo();
  const [sidebar, onChanges]: any = useMenu();
  const dimension = useDimensions();
  const [animation, setAnimation] = React.useState(
    new Animated.Value(dimension.width > theme.breakpoints.lg ? 0 : -240),
  );

  React.useEffect(() => {
    if (dimension.width <= theme.breakpoints.lg) {
      Animated.timing(animation, {
        toValue: sidebar ? 0 : -240,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [dimension, sidebar]);

  return (
    <Box
      style={{
        backgroundColor: theme.colors.pink,
        paddingVertical: 40,
        transform: [
          {
            translateX: animation,
          },
        ],
        height: '100%',
        zIndex: 1080,
      }}
      position={{
        xs: 'fixed',
        s: 'fixed',
        md: 'fixed',
      }}
      width={240}>
      <View style={{height: 70, alignItems: 'center'}}>
        <Text>Logo</Text>
      </View>
      <View>
        <View>
          <TouchableOpacity onPress={() => linkTo('/')} style={{padding: 20}}>
            Home
          </TouchableOpacity>
        </View>
      </View>
    </Box>
  );
};
