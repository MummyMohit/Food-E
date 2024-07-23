import React, { useState } from 'react';
import { CButton, CAlert, COffcanvas, COffcanvasHeader, COffcanvasTitle, CCloseButton, COffcanvasBody } from '@coreui/react';
import PropTypes from 'prop-types';

const Offcanvs = (props) => {
  Offcanvs.propTypes = {
    handleCloseClick: PropTypes.func, // Assuming 'handleCloseClick' is a function prop
    Open: PropTypes.bool, // Assuming 'Open' is a boolean prop
    component: PropTypes.element, // Assuming 'component' is an element prop
    title: PropTypes.string.isRequired, // Add prop types validation for 'title'
    canvasWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) // Update canvasWidth prop type
  };

  // Handler to close the offcanvas
  const handleClose = () => {
    if (props.handleCloseClick) {
      props.handleCloseClick();
    }
  };

  return (
    <>
      <COffcanvas
        placement="end"
        visible={props.visible}
        onHide={handleClose} // Close offcanvas when clicked outside
        style={{ width: props.canvasWidth || '500px', marginTop: '61px' }} // Update default width logic
      >
        <COffcanvasHeader>
          <COffcanvasTitle>{props.title}</COffcanvasTitle>
          <hr />
          <CCloseButton className="text-reset" onClick={handleClose} /> {/* Use handleClose function */}
        </COffcanvasHeader>
        <COffcanvasBody>{props.component}</COffcanvasBody>
      </COffcanvas>
    </>
  );
};

export default Offcanvs;
