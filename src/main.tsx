import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store/index';
import { Provider } from 'react-redux';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './style.css';
import Post from './pages/Post';
import Root from './pages/Root';
import Editor from './pages/Editor';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Private from './pages/Private';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':postId',
        element: <Post />,
      },
      {
        path: 'category/:categoryId',
        element: <Home />,
      },
      {
        path: 'editor',
        element: <Private />,
        children: [
          {
            index: true,
            element: <Editor />,
          },
          {
            path: ':postId',
            element: <Editor />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
