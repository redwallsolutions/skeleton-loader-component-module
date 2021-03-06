import React, { FC, FormEvent, useState } from "react";
import { render } from "react-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import { IAppearance } from "@redwallsolutions/common-interfaces-ts";
import { Md3DRotation } from "react-icons/md";
import Skeleton from "./lib";

const theming = createThemeWithAppearance();

const Reset = createGlobalStyle<any>`
    body {
		font-family: Arial, Helvetica, Geneva, Tahoma, sans-serif;
        padding: 0;
        margin: 0;
        background-color: ${(props) => theming(props).contrast};
        color: ${(props) => theming(props).color};
        &, * {
            box-sizing: border-box;
            transition: .3s;
        }
    }
`;

Reset.defaultProps = {
  appearance: "default",
} as any;

const Container = styled.div`
  height: 100vw;
  padding: 10px;
  margin: 0;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
`;

const App: FC = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [appearance, setAppearance] = useState("default");

  const onChange = (event: FormEvent) => {
    let currentTarget = event.currentTarget;
    let inputName = currentTarget.attributes.getNamedItem("name").nodeValue;
    if (inputName === "mode") {
      setThemeMode(currentTarget.id);
    } else {
      setAppearance(currentTarget.id);
    }
  };

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Container>
        <Reset appearance={appearance} />
        <InputsContainer>
          <InputItem>
            <label htmlFor="light">Mode Light</label>
            <input type="radio" id="light" onChange={onChange} name="mode" />
          </InputItem>
          <InputItem>
            <label htmlFor="dark">Mode Dark</label>
            <input type="radio" id="dark" onChange={onChange} name="mode" />
          </InputItem>
          <InputItem>
            <label htmlFor="default">Appearance Default</label>
            <input
              type="radio"
              id="default"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
          <InputItem>
            <label htmlFor="primary">Appearance Primary</label>
            <input
              type="radio"
              id="primary"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
          <InputItem>
            <label htmlFor="secondary">Appearance Secondary</label>
            <input
              type="radio"
              id="secondary"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
        </InputsContainer>
        <div style={{ width: "100%", height: "100px" }}>
          <h1 style={{ lineHeight: "5em" }}>
            <Skeleton appearance={appearance as IAppearance} />
          </h1>
          <h2>
            <Skeleton
              appearance="default"
              theme={{ mode: "light", default: "lightgreen" }}
            />
          </h2>
        </div>
      </Container>
    </ThemeProvider>
  );
};

render(<App />, document.querySelector("#app"));
