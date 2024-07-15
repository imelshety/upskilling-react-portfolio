import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './components/MasterLayout/MasterLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Work from './pages/Work/Work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      { index: true,  element: <Home /> },
      { path:'/home',  element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'experience', element: <Experience /> },
      { path: 'work', element: <Work /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
