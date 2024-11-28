
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path:'users',
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/users')
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <App />
  </RouterProvider>,
)
