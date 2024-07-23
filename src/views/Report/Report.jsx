import { useState, useEffect } from 'react';
import { CCol, CRow, CCard, CCardBody, CForm, CFormInput, CButton } from '@coreui/react';
import Muitable from 'share/muitable';
import axios from 'axios';
import Companytable from 'views/Report/companytable';

const Report = () => {
  const [report, setReport] = useState([]);
  const [visible, setVisible] = useState(false);

  const columns = [
    { field: 'name', headerName: 'Users', width: 170 },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'street', headerName: 'Address', width: 170 },

    {
      field: 'lng',
      headerName: 'Amount',
      sortable: false,
      width: 170
    }
  ];

  const handlebuttonclick = () => {
    setVisible(true);
  };

  const fetchdata = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      let data = response?.data?.map((item) => {
        return {
          ...item,
          street: item.address.street,
          lng: item.address.geo.lng
        };
      });
      console.log(data);
      setReport(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {!visible ? <h3>Payment Details</h3> : <h3>Company Details</h3>}
      <CButton color="danger" style={{ marginLeft: '830px', marginTop: '-250px' }} onClick={handlebuttonclick}>
        Company table
      </CButton>

      {!visible ? (
        <CCard>
          <CCardBody>
            <Muitable columns={columns} rows={report} checkboxSelection={false} />
          </CCardBody>
        </CCard>
      ) : null}
      {visible ? <Companytable report={report} /> : null}
    </div>
  );
};
export default Report;
