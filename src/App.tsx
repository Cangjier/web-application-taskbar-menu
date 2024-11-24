import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Services } from './services';
const InjectStyle = (value: string) => {
  const id = `rand_${Math.random().toString(36).substr(2, 9)}`
  if (document.getElementById(id) === null) {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.id = id;
      style.innerHTML = value;
      document.getElementsByTagName('head')[0].appendChild(style);
  }
}

InjectStyle(`
  .ant-btn:not(:disabled):focus-visible {
    outline: none;
  }
`);
function App() {
  const containerPadding = 5;
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: `calc(100vh - ${containerPadding * 2}px)`,
    width: `calc(100vw - ${containerPadding * 2}px)`,
    padding: containerPadding,
  }}>
    <Button style={{
      width: '100%',
    }} type='text' onClick={async () => {
      await Services.Home();
    }}>{"Home"}</Button>
    <div style={{
      flex: 1,
    }}>

    </div>
    <Button type='text' style={{
      width: '100%',
    }} onClick={async () => {
      await Services.Exit();
    }}>{"Exit"}</Button>
  </div>
}

export default App;
