import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/Layout'
import { routes } from './routes'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>sorry, now it is not working</div>,
      children: routes
    }
  ])
  return router
}
export const routers = App()
