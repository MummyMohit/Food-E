import React, { useState } from 'react';
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';
import PropTypes from 'prop-types'; 
import { propTypes } from '../../node_modules/react-bootstrap/esm/Image';

const Modal = (props) => {
  const [visible, setVisible] = useState(false);
 

  const handleClose = () => {
    if (props.handleModalclose) {
      props.handleModalclose();
    }
  };

 
  return (
    <div style={{margin:"144px"}}>
      <CModal visible={props.visible} onClose={() => setVisible(false)}
         alignment="center"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>{props.title}</CModalTitle>
        </CModalHeader>
        <CModalBody>
       {props.components}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary"  onClose={handleClose} >Close</CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default Modal;