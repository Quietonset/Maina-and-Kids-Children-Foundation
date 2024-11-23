import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MenuProvider } from './context/MenuContext.jsx'
import { AnniversaryProvider } from './context/AnniversaryContext.jsx'
// import { AnniversaryContext } from './context/AnniversaryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnniversaryProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </AnniversaryProvider>
  </StrictMode>,
)
