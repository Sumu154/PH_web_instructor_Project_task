import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import axios from "axios";

// layout imports
import App from "../App";
import AuthLayout from "../layouts/AuthLayout";


//  import pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";



// import componnets
import Error from '../components/shared/Error'
import PrivateRoute from "./PrivateRoute";
import EventsPage from "../pages/EventsPage";
import AddEventsPage from "../pages/AddEventsPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/allEvents',
        element: <PrivateRoute> <EventsPage></EventsPage> </PrivateRoute>,
      },
      // {
      //   path: '/marathons/:id',
      //   element: <PrivateRoute> <MarathonDetailsPage></MarathonDetailsPage> </PrivateRoute>,
      //   loader: async ( {params} ) => {
      //     const res = await axios.get(`https://marathon-management-server-side.vercel.app/api/marathons/${params.id}`, {withCredentials: true});
      //     const marathon =  res.data;
      //     return marathon;
      //   }
      // },
      // {
      //   path: '/registerMarathon',
      //   element: <PrivateRoute> <RegisterToMarathonForm></RegisterToMarathonForm> </PrivateRoute>,
      // },
      {
        path: '/addEvent',
        element: <PrivateRoute> <AddEventsPage></AddEventsPage>  </PrivateRoute> ,
      },
      // {
      //   path: '/myMarathons',
      //   element: <PrivateRoute> <MyMarathonPage></MyMarathonPage> </PrivateRoute>,
      // },
      // {
      //   path: '/updateMarathon/:id',
      //   element: <PrivateRoute> <UpdateMarathonPage></UpdateMarathonPage> </PrivateRoute>,
      //   loader: async ( {params} ) => {
      //     const res = await axios.get(`https://marathon-management-server-side.vercel.app/api/marathons/${params.id}`, {withCredentials: true});
      //     const marathon = res.data;
      //     return marathon;
      //   }
      // },
      // {
      //   path: '/myApplies',
      //   element: <PrivateRoute> <MyApplyListPage></MyApplyListPage> </PrivateRoute>,
      // },
      // {
      //   path: '/updateRegistration/:id',
      //   element: <PrivateRoute> <UpdateRegistrationPage></UpdateRegistrationPage> </PrivateRoute>,
      //   loader: async ( {params} ) => {
      //     console.log(params.id);
      //     const res = await axios.get(`https://marathon-management-server-side.vercel.app/api/registrations/${params.id}`, { withCredentials: true });
      //     const registration = res.data;
      //     return registration;
      //   }
      // }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;