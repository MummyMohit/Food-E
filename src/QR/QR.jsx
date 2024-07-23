import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { CCol, CRow, CCard, CCardBody, CForm, CFormInput, CButton } from '@coreui/react';

const QR = () => {
  const [qrValue, setQrValue] = useState('Mohit Bisen');
  const navigate = useNavigate();

  useEffect(() => {
 
    const timer = setTimeout(() => {
      navigate('/login');
    }, 4000); // 10 seconds

 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CCard style={{ width: '590px', height: '280px', marginLeft: '341px', marginTop: '139px',background:"tomato" }}>
        <CCardBody>
          <h1>SCAN ME</h1>
          <div style={{ marginTop: '20px' }}>{qrValue && <QRCode value={qrValue} />}</div>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default QR;
