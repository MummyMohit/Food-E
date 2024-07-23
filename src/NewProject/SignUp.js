import React from 'react';
import { Flight, Quanta } from 'views/field/pic';
import { CCol, CForm, CButton, CFormInput, CRow, CCard, CCardBody } from '@coreui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    console.log('Form data', values);
    }
  });

  return (
    <>
      <CCol style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <img src={Flight} alt="Flight" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: -1 }} />
        <CCard
          style={{
            width: '500px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          <CCol md={5} className="mb-2">
            <img src={Quanta} alt="Quanta" style={{ width: '208px', marginLeft: '86px', height: '200px', marginBottom: '20px' }} />
          </CCol>

          <CForm onSubmit={formik.handleSubmit}>
            <CCol md={12} className="mb-2">
              <CFormInput
                type="text"
                label="Username"
                placeholder="Enter Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.touched.username && formik.errors.username && <div className="text-danger">{formik.errors.username}</div>}
            </CCol>
            <CCol md={12} className="mb-2">
              <CFormInput
                type="email"
                label="Email"
                placeholder="Enter Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
            </CCol>
            <CCol md={12} className="mb-2">
              <CFormInput
                type="password"
                label="Password"
                placeholder="Enter Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}
            </CCol>
            <CCol md={10} className="mb-3">
              <CButton type="submit" color="primary" style={{ width: '413px' }}>
                Sign Up
              </CButton>
            </CCol>
          </CForm>
        </CCard>
      </CCol>
    </>
  );
};

export default SignUp;
