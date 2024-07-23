// import { lazy } from 'react';

// project import
// import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import QR from 'QR/QR';
import Login from 'Login/login';
import Register from 'Login/Register';
import SignUp from 'NewProject/SignUp';
// render - login
// const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
// const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    // {
    //   path: 'login',
    //   element: <AuthLogin />
    // },
    // {
    //   path: 'register',
    //   element: <AuthRegister />
    // }
    {
      path:'',
      element:<QR/>
    }
    ,
     {
        path: '/login',
        element:<Login/>
      }
      ,
      {
        path: '/register',
        element:<Register/>
      },
      {
        path: '/signup',
        element:<SignUp/>
      }
  ]
};

export default LoginRoutes;
