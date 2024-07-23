
import React from 'react';
import { CBreadcrumb, CBreadcrumbItem} from '@coreui/react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
const Breadcrumbs = ({ path }) => {
  return (
    <CBreadcrumb>
      {path?.map((crumb, index) => (
        <CBreadcrumbItem key={index} active={index === path.length - 1}>
          {index === path.length - 1 ? (
            crumb.label
          ) : (
            <Link to={crumb.path}>
              {crumb.label}
            </Link>
          )}
        </CBreadcrumbItem>
      ))}
    </CBreadcrumb>
  );
};

export default Breadcrumbs;

