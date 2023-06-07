import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
import reportWebVitals from './reportWebVitals';
// import Routes from './components/Routes'
import App from './App';
// import { Provider, createStoreHook } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
// import Home from './pages/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));




// const store = createStoreHook(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
root.render(
  // <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    {/* <Routes/> */}
    <App/>
    </BrowserRouter>  
  {/* </Provider> */}
    <ToastContainer/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
