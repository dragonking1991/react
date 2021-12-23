import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './dateTime/App';
import Hello from './helloName/Hello';
import Exchange from './exchange/Exchange';
import Board from './boardTable/Board';
import Nav from './navRoute/Nav';
import * as serviceWorker from './serviceWorker';
import store from './store.js'
import { Provider } from 'react-redux'
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import AuthProvider from './components/Context/AuthProvider';
import AppProvider from './components/Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';

const DATAS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]



ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={ChatRoom} path="/" />
          </Switch>
          <AddRoomModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
    {/* <Login /> */}

    <Provider store={store}>

      -----------------------------------------------------------------------------
      <App />
      -----------------------------------------------------------------------------
      <Board data={DATAS} />
      -----------------------------------------------------------------------------
      <Exchange />
      -----------------------------------------------------------------------------
      <Hello />
      -----------------------------------------------------------------------------
      <Nav />
      -----------------------------------------------------------------------------
    </Provider>

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
