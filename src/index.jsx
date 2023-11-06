import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import App from './App'
import GlobalStyle from './theme/GlobalStyle'
import Theme from './theme/Theme'
// import "./tailwind.css"; 

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
