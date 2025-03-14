import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18next.ts'
import './stylesheet/fonts.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './App.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </StrictMode>
)
