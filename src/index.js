import React from 'react';
import ReactDOM from 'react-dom/client';
// import Fetch from './Fetch';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import Weather from './Weather';
import MainRouter from './MainRouter';
// import App from './routes/App';
import { Provider } from 'react-redux';
import store from './store';
// import State from './state';
// import CustomHook from './customHook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <BrowserRouter>
        <App />
    </BrowserRouter> */}
    {/* <State/> */}
    {/* <Fetch/> */}
    {/* <CustomHook/> */}
    {/* <Weather/>  */}
    {/* <MainRouter/> */}
    <Provider store={store}>
      <MainRouter/>
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
