
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <App />
  </RouterProvider>,
)