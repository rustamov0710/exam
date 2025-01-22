import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PublicPage from './pages/PublicPage/PublicPage';
import Shop from './pages/Shop/Shop';
import PlantCare from './pages/PlantCare/PlantCare';
import Blogs from './pages/Blogs/Blogs';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicPage />
    },
    {
      path: '/shop',
      element: <Shop />
    },
    {
      path: '/plant-care',
      element: <PlantCare />
    },
    {
      path: '/blogs',
      element: <Blogs />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
