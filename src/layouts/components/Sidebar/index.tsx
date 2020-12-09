import React from 'react';
import {Animated} from 'react-native';
import {Box} from '../../../components/Box';
import {ThemeContext} from '../../../App';
import SideHooks from './hooks';
import useDimensions from '../../../components/hooks/useDimension';

export default () => {
  const theme: any = React.useContext(ThemeContext);
  const sidebar = SideHooks();
  const dimension = useDimensions();
  const [animation, setAnimation] = React.useState(
    new Animated.Value(dimension.width > theme.breakpoints.md ? 0 : -230),
  );

  React.useEffect(() => {
    if (dimension.width <= 768) {
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
      style={{backgroundColor: theme.colors.celadon}}
      width={230}
      marginLeft={{
        xs: animation,
        s: animation,
        md: animation,
        lg: animation,
        xl: animation,
      }}></Box>
  );
};
