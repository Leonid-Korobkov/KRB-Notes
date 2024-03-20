import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import AuthProvider from './context/AuthProvider.jsx'

import {Provider} from 'react-redux'
import store, {persistor} from './store/store'

import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
