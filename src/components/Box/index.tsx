import React, {useContext} from 'react';
import {Animated} from 'react-native';
import {ThemeContext} from '../../App';
import useDimension from '../hooks/useDimension';

const getBreakpointForScreenSize = ({theme, dimensions}: any) => {
  const sortedBreakpoints = Object.entries(theme.breakpoints).sort(
    (valA: any, valB: any) => {
      return valA[1] - valB[1];
    },
  );

  return sortedBreakpoints.reduce((acc: any, [breakpoint, minWidth]: any) => {
    if (dimensions.width >= minWidth) return breakpoint;
    return acc;
  }, null);
};

const getResponsiveValue = ({value, dimensions, theme}: any) => {
  if (typeof value === 'object') {
    return value[getBreakpointForScreenSize({theme, dimensions})];
  }
  return value;
};

export const Box = ({
  flex,
  style,
  padding,
  margin,
  backgroundColor,
  width,
  marginLeft,
  maxWidth,
  paddingRight,
  paddingLeft,
  transform,
  borderLeftWidth,
  py,
  display,
  position,
  flexDirection,
  ...rest
}: any) => {
  const theme: any = useContext(ThemeContext);
  const dimensions = useDimension();

  return (
    <Animated.View
      style={{
        margin:
          theme.spacing[getResponsiveValue({value: margin, dimensions, theme})],
        padding:
          theme.spacing[
            getResponsiveValue({value: padding, dimensions, theme})
          ],
        paddingLeft:
          theme.spacing[
            getResponsiveValue({value: paddingLeft, dimensions, theme})
          ],
        paddingRight:
          theme.spacing[
            getResponsiveValue({value: paddingRight, dimensions, theme})
          ],
        backgroundColor:
          theme.colors[
            getResponsiveValue({value: backgroundColor, dimensions, theme})
          ],
        marginLeft: getResponsiveValue({value: marginLeft, dimensions, theme}),
        width: getResponsiveValue({value: width, dimensions, theme}),
        maxWidth: getResponsiveValue({value: maxWidth, dimensions, theme}),
        transform: getResponsiveValue({value: transform, dimensions, theme}),
        display: getResponsiveValue({value: display, dimensions, theme}),
        position: getResponsiveValue({value: position, dimensions, theme}),
        flex: getResponsiveValue({value: flex, dimensions, theme}),
        borderLeftWidth: getResponsiveValue({
          value: borderLeftWidth,
          dimensions,
          theme,
        }),
        paddingVertical: getResponsiveValue({value: py, dimensions, theme}),
        flexDirection: getResponsiveValue({
          value: flexDirection,
          dimensions,
          theme,
        }),
        ...style,
      }}
      {...rest}
    />
  );
};
