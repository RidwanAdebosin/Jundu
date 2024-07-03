import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Post from './Post'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'post',
        element: <Post />,
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
