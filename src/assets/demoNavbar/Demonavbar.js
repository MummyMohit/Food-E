import React, { useState, useEffect } from 'react';
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react';
import { useLocation } from 'react-router-dom';
import Blog from './Blog';
import About from './About';
import Product from './Product';

const Demonavbar = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState(1);
  console.log(location,"Location")
// this effect is for current object of value if refresh the page not goes to first tab and if remove then go 
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = parseInt(params.get('tab')) || 1;
    setActiveKey(tab);
  }, [location]);


  const handleTabClick = (key) => {
    setActiveKey(key);
    const params = new URLSearchParams(location.search);
    params.set('tab', key);
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink active={activeKey === 1} onClick={() => handleTabClick(1)}>
            Product
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink active={activeKey === 2} onClick={() => handleTabClick(2)}>
            About
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink active={activeKey === 3} onClick={() => handleTabClick(3)}>
            Blog
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="product-tab" visible={activeKey === 1}>
          <Product />
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="about-tab" visible={activeKey === 2}>
          <About />
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="blog-tab" visible={activeKey === 3}>
          <Blog />
        </CTabPane>
      </CTabContent>
    </>
  );
};

export default Demonavbar;
