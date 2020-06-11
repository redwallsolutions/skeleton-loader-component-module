import React, { FC, useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ThemeContext } from "styled-components";
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import { ISkeletonProps } from "./interfaces";

const theming = createThemeWithAppearance();

const defaultTheme = {
  mode: "light",
};

const SkeletonLoader: FC<ISkeletonProps> = ({
  appearance = "default",
  theme,
  color,
  width,
  height,
  circle = false,
}) => {
  const themeToApply = theme || useContext(ThemeContext) || defaultTheme;
  const props = { appearance, theme: themeToApply };
  return (
    <SkeletonTheme
      color={color || theming(props).contrast(props)}
      highlightColor={theming(props).color(props)}
    >
      <Skeleton width={width} height={height} circle={circle} />
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
	