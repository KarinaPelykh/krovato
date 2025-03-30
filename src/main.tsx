import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18next.ts'
import './stylesheet/fonts.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './App.tsx'
import { store, persistor } from './redux/store.ts'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={routers} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </StrictMode>
)
