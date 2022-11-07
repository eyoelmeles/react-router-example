import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import Contact, {loader as contactLoader, action as contactAction } from './routes/contact'
import EditContact, {action as editAction } from './routes/edit'
import { action as destroyAction } from "./routes/destroy"
import ErrorPage from './error-page';
import Index from './routes/index';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      action: rootAction,
      errorElement: <ErrorPage />,
      children: [
		{
			errorElement: <ErrorPage />,
			children: [
		{index: true, element: <Index />},
        {
          path: "/contacts/:contactId",
          element: <Contact />,
		  action: contactAction,
          loader: contactLoader,
        },
        {
          path: "/contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
		{
			path: "/contacts/:contactId/destroy",
			loader: contactLoader,
			action: destroyAction,
			errorElement: <div>Oops! There was an error</div>,
		},
      ],
	  },
	  ]
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
