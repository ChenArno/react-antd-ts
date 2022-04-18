import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/css/index.less';
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'dayjs/locale/zh-cn';
import reportWebVitals from './reportWebVitals';
import store from '@/store';
import Routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zh_CN}>
        <Routes />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
