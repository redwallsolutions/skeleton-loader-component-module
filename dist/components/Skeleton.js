import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { withTheme } from 'styled-components';
import Theming from 'theming-component-module';
var theme = Theming.createThemeWithAppearance();

var SkeletonLoader = function SkeletonLoader(props) {
  return React.createElement(SkeletonTheme, {
    color: props.color || theme(props).contrast(props),
    highlightColor: props.highlightColor || theme(props).color(props)
  }, React.createElement(Skeleton, {
    width: props.width
  }));
};

SkeletonLoader.defaultProps = {
  appearance: 'primary',
  color: undefined,
  highlightColor: undefined
};
export default withTheme(SkeletonLoader);