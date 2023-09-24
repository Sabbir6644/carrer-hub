import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import JobDetails from './Components/FeaturedJobs/JobDetails';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <Banner></Banner>
      },
      {
        path: `/details/:id`,
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('jobs.json')
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
