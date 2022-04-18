import React from 'react';
import logo from '@/assets/image/logo.svg';
import './App.css';
import styles from './index.module.less';

import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className={styles.kl}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a>
          Learn Reactsss
        </a>
        <Button type='primary'>确认</Button>
      </header>
    </div>
  );
}

export default App;
