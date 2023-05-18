import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i8n from './i18n'
import { I18nextProvider } from 'react-i18next'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i8n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
