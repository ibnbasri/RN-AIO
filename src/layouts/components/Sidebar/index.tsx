import React from 'react';
import {Animated, View, Text, Button, TouchableOpacity} from 'react-native';
import {Box} from '../../../components/Box';
import {ThemeContext} from '../../../App';
import SideHooks from './hooks';
import useDimensions from '../../../components/hooks/useDimension';
import {Link} from '@react-navigation/native';
import {useLinkTo} from '@react-navigation/native';

export default () => {
  const theme: any = React.useContext(ThemeContext);
  const linkTo = useLinkTo();
  const sidebar = SideHooks();
  const dimension = useDimensions();
  const [animation, setAnimation] = React.useState(
    new Animated.Value(dimension.width > theme.breakpoints.lg ? 0 : -230),
  );

  React.useEffect(() => {
    if (dimension.width <= theme.breakpoints.lg) {
      Animated.timing(animation, {
        toValue: -230,
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
  }, [dimension]);

  return (
    <Box
      style={{backgroundColor: theme.colors.pink, paddingVertical: 40}}
      width={230}
      marginLeft={{
        xs: animation,
        s: animation,
        md: animation,
        lg: animation,
        xl: animation,
      }}>
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
