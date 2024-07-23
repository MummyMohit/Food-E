import {useState,useEffect} from 'react';
import Muitable from 'share/muitable';
import { CCol, CRow, CCard, CCardBody, CForm, CFormInput, CButton, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import { defaultImage, billing, payment, electricity } from 'views/field/pic';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
const Companytable = (props) => {
  const data = props.report;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const[album,setAlbum] = useState();
  let filteredData = data.filter((companydata) => companydata.company);
  let company = filteredData.map((companydata, index) => ({
    ...companydata.company,
    id: index // Assigning a unique id based on the index
  }));
  console.log(company, 'company');
  const columns = [
    { field: 'name', headerName: 'CompanyName', width: 170 },
    { field: 'catchPhrase', headerName: 'CatchPhrase', width: 170 },
    { field: 'bs', headerName: 'Bs', width: 170 }
  ];

  const handlepaymentclick = () => {
    setIsLoading(true); // Set loading state to true before navigation

    // Simulate a delay for demonstration purposes (you can remove this in actual implementation)
    setTimeout(() => {
      navigate('/dashboard/payment');
      setIsLoading(false); // Set loading state to false after navigation
    }, 1000); // Adjust delay as needed
  };

// const fetchdata = async()=>{
//   try{
//     const reasponse = await axios.get("https://jsonplaceholder.typicode.com/photos")
//     setAlbum(reasponse.data)
//     console.log(reasponse,)
//   }
//   catch(error){
//    console.log(error);
//   }
// }

// useEffect(()=>{
//   fetchdata()
// },[])

  return (
    <div>
      <CCard>
        <CCardBody>
          <Muitable columns={columns} rows={company} />
        </CCardBody>
      </CCard>
      <CRow className="mt-5">
        <CCol md={4}>
          <CCard>
            <CCardImage orientation="top" src={billing} class="rounded-circle" />
            <CCardBody>
              <CCardTitle>Invoices</CCardTitle>
              <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={4}>
        <CCard>
      {isLoading ? (
        <CircularProgress size={48} style={{ margin: 'auto' }} />
      ) : (
        <>
          <CCardImage
            orientation="top"
            src={payment}
            className="rounded"
            onClick={handlepaymentclick}
          />
          <CCardBody>
            <CCardTitle>Payment</CCardTitle>
            <CCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CCardText>
          </CCardBody>
        </>
      )}
    </CCard>
        </CCol>
        <CCol md={4}>
          <CCard>
            <CCardImage orientation="top" src={electricity} class="rounded" />
            <CCardBody>
              <CCardTitle>Billing detail</CCardTitle>
              <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Companytable;
