// // project import
// import Routes from 'routes';
// import ThemeCustomization from 'themes';
// import ScrollTop from 'components/ScrollTop';
// import './index.css';
// import { UserProvider } from 'views/Practice/Mycontext';
// import Profile from 'views/profile/profile';
// // ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

// const App = () => (
//   <ThemeCustomization>
//     <ScrollTop>
//       <Routes />
//     </ScrollTop>
//     {/* <UserProvider>
//     <Profile />
//     </UserProvider> */}
//   </ThemeCustomization>
// );

// export default App;
// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import './index.css';
import { UserProvider } from 'views/Practice/Mycontext';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;

