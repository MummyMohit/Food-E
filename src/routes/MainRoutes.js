import { lazy } from 'react';
// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import Practice from 'views/Practice/practice';
import Profile from 'views/profile/profile';
import Report from 'views/Report/Report';
import Manageuser from 'views/manageuser/Manageuser';
import GenerateBill from 'views/GenerateBill/GenerateBill';
import Payment from 'Payment/payment';
import Post from 'Post/post';
import Order from 'Order/order';
import Loginpage from 'Login/AnotherLoginpage';
import PracticeComponent2 from 'PracticeComponent2/PracticeComponent2';
import Demonavbar from 'assets/demoNavbar/Demonavbar';
import Blog from 'assets/demoNavbar/Blog';
import About from 'assets/demoNavbar/About';
import Product from 'assets/demoNavbar/Product';
import Food from 'Otherfolder/Food';
import TestProfile from 'Post/TestProfile';
import Callback from 'views/Callback/Callback';
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/dashboard',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: '/dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/dashboard/sample-page',
      element: <SamplePage />
    },
    {
      path: '/dashboard/shadow',
      element: <Shadow />
    },
    {
      path: '/dashboard/typography',
      element: <Typography />
    },
    {
      path: '/dashboard/icons/ant',
      element: <AntIcons />
    },
    // {
    //   path: '/dashboard/compnaydata',
    //   element: <Compnaydata />
    // },
    // {
    //   path: '/dashboard/support',
    //   element: <Support />
    // },
    // {
    //   path: '/dashboard/practice',
    //   element: < Practice/>
    // },
    {
      path: '/dashboard/profile',
      element: <Profile/>
    },
    {
      path: '/dashboard/report',
      element: <Report/>
    },
    {
      path: '/dashboard/manageuser',
      element:<Manageuser/>
    },
    {
      path: '/dashboard/generatebill',
      element:<GenerateBill/>
    },
    {
      path: '/dashboard/payment',
      element:<Payment/>
    },
    {
      path: '/dashboard/post',
      element:<Post/>
    },
    {
      path: '/dashboard/order',
      element:<Order/>
    },
    {
      path: '/dashboard/loginpage',
      element:<Loginpage/>
    },
    {
      path: '/dashboard/practicecomponent2',
      element:<PracticeComponent2/>
    },
    {
      path: '/dashboard/navbar',
      element:<Demonavbar/>
    },
    {
      path: '/dashboard/blog',
      element:<Blog/>
    },
    {
      path: '/dashboard/about',
      element:<About/>
    },
    {
      path: '/dashboard/product',
      element:<Product/>
    },
    {
      path: '/dashboard/food',
      element:<Food/>
    },
    {
      path: '/dashboard/testprofile',
      element:<TestProfile/>
    },
    {
      path: '/dashboard/callback',
      element:<Callback/>
    }

    // {
    //   path: '/dashboard/login',
    //   element:<Login/>
    // }
  ]
};

export default MainRoutes;
