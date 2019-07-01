import React from 'react';
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components';
import Skeleton from './lib'

class App extends React.Component {

  state = {
    mode: 'light'
  }

  changeMode = (input) => {
    const mode = input.target.id
    this.setState({
      mode
    });
  }

  render() {
    return (
      <ThemeProvider theme={{mode:this.state.mode}}>
        <div style={{transition: 'all .3s', height: '99vh', width: '98vw', backgroundColor: this.state.mode === 'dark' ? 'rgb(44, 55, 56)' : 'rgb(244, 244, 244)'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <label htmlFor='light'>Light Mode</label>
            <input type='radio' id='light' name='mode' onChange={this.changeMode}/>
            <label htmlFor='dark'>Dark Mode</label>
            <input  type='radio' id='dark' name='mode' onChange={this.changeMode}/>
          </div>
          <h2><Skeleton width={200} color='blue'/></h2>
          <Skeleton width={400}/>
          <h5><Skeleton width={150}/></h5>
          <h2><Skeleton width={250}/></h2>
        </div>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById("root"));
