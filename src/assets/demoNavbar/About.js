import { useState } from 'react';
import { CCol, CRow, CCard, CCardBody, CForm, CFormInput, CButton } from '@coreui/react';
import { Nature } from 'views/field/pic';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'not less than 6 character')
    .max(50, 'Too Long!')
    .required('Password is required'),
});

const About = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  
  return (
    <>
      <CRow>
        <CCol md={6}>
          <CCard style={{ height: '615px' }}>
            <h3 style={{ marginTop: '29px', marginLeft: '57px' }}>Get Started Now</h3>
            <CForm onSubmit={formik.handleSubmit} style={{ marginLeft: '41px' }}>
              <CCol className="mt-3" md={10}>
                <CFormInput
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                 
                  label="Name"
                  placeholder="Enter Name"
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: 'red' }}>{formik.errors.name}</div>
                ) : null}
              </CCol>
              <CCol className="mt-3" md={10}>
                <CFormInput
                  type="email"
                  id="email"
                  name="email"
                  label="Email address"
                  placeholder="Enter your Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: 'red' }}>{formik.errors.email}</div>
                ) : null}
              </CCol>
              <CCol className="mt-3" md={10}>
                <CFormInput
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: 'red' }}>{formik.errors.password}</div>
                ) : null}
              </CCol>
              <CRow>
                <CCol className="mt-4">
                  <CButton type="submit" style={{ background: 'green', width: '359px' }}>
                    SignUp
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCard>
        </CCol>

        <CCol md={6}>
          <img src={Nature} style={{ width: '471px', height: '100vh', borderRadius: '20px' }} />
        </CCol>
      </CRow>
    </>
  );
};

export default About;
