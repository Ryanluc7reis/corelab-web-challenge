import React from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './pages/App'
const GlobalStyles = createGlobalStyle`
* { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
)
