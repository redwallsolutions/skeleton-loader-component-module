import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { withTheme } from 'styled-components';
import Theming from 'theming-component-module'

const theme = Theming.createThemeWithAppearance()

const SkeletonLoader = (props) => {
  return (
    <SkeletonTheme color={props.color || theme(props).contrast(props)} highlightColor={props.highlightColor || theme(props).color(props)}>
      <Skeleton width={props.width}/>
    </SkeletonTheme>
  )
}

SkeletonLoader.defaultProps = {
  appearance:'primary',
  color: undefined,
  highlightColor: undefined
}

export default withTheme(SkeletonLoader)
