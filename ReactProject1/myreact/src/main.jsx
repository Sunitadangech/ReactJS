// import { createRoot } from 'react-dom/client'

// let heading=(
//   <div>
//     <h1>Hello React</h1>
//     <h2>Hello React</h2>
//     <h3>Hello React</h3>
//     <h4>Hello React</h4>
//     <h5>Hello React</h5>
//   </div>
// )

// createRoot(document.getElementById('root')).render(heading)


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
