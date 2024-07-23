import React, { useEffect, useState,useContext } from 'react';
import { CCol, CRow, CCard, CCardBody, CForm, CFormInput, CButton,CFormSelect } from '@coreui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Search from 'layout/MainLayout/Header/HeaderContent/Search';
import Muitable from 'share/muitable';
import axios from 'axios';
import { UserContext } from 'views/Practice/Mycontext';

const Manageuser = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleclick = () => {
    setVisible(!visible);
  };

  const { apk } = useContext(UserContext); // Destructure context value
  // console.log("api data", apk);
  const validationSchema = Yup.object({
    scno: Yup.string().required('SCNO is required'),
    fullname: Yup.string().required('Full name is required'),
    address: Yup.string().required('Address is required'),
    phonenumber: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]+$/, 'Phone number must be digits only')
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number must be no more than 15 digits'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
  });

  const formik = useFormik({
    initialValues: {
      scno: '',
      fullname: '',
      address: '',
      phonenumber: '',
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form data', values);
    }
  });

  const columns = [
    { field: 'title', headerName: 'Title', width: 70 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },

    {
      field: 'price',
      headerName: 'Amount',
      sortable: false,
      width: 160
    }
  ];

  console.log(columns,"value");

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
      console.log(response.data, 'Products');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  // const myObj = {name: "John", age: 31, city: "New York"};
  // const myJSON = JSON.stringify(myObj);
  // localStorage.setItem("testJSON", myJSON);


// let text = localStorage.getItem("testJSON");
// let obj = JSON.parse(text);
// console.log(obj);
  return (
    <>
      {/* <Search /> */}
      <CFormSelect aria-label="Default select example">
  <option>Open this select menu</option>
  {apk.map((data)=>(
    <option key={data.id} value={data.name}>{data.name}</option>
  ))}
</CFormSelect>
      <CButton color="primary" style={{ marginLeft: '860px' }} onClick={handleclick}>
        Add
      </CButton>
      {visible ? (
        <div style={{ background: 'aliceblue', height: '100vh' }}>
          <CCard>
            <CCardBody>
              <CForm onSubmit={formik.handleSubmit}>
                <CCol>
                  <CFormInput
                    type="text"
                    name="scno"
                    id="exampleFormControlInput1"
                    label="SCNO."
                    placeholder="Enter SCNO"
                    value={formik.values.scno}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.scno && formik.errors.scno ? <div className="text-danger">{formik.errors.scno}</div> : null}
                </CCol>
                <CCol>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    label="Full Name"
                    placeholder="Enter full name"
                    name="fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.fullname && formik.errors.fullname ? <div className="text-danger">{formik.errors.fullname}</div> : null}
                </CCol>
                <CRow>
                  <CCol>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      label="Address"
                      name="address"
                      placeholder="Enter address..."
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                  </CCol>
                  <CCol>
                    <CFormInput
                      type="number"
                      id="exampleFormControlInput1"
                      label="Phone No."
                      placeholder="Enter full name"
                      name="phonenumber"
                      value={formik.values.phonenumber}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.phonenumber && formik.errors.phonenumber ? (
                      <div className="text-danger">{formik.errors.phonenumber}</div>
                    ) : null}
                  </CCol>
                </CRow>
                <CCol>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    label="Email"
                    placeholder="Enter your email.."
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                </CCol>
                <CCol>
                  <CFormInput
                    type="password"
                    id="exampleFormControlInput1"
                    label="Password"
                    placeholder="Enter your Password..."
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                </CCol>
                <CCol className="mt-3">
                  <CButton color="primary" type="submit">
                    ADD
                  </CButton>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </div>
      ) : null}

      {!visible?( <Muitable columns={columns} rows={data} />):null }
    </>
  );
};
export default Manageuser;
