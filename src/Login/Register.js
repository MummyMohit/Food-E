import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CRow, CCol, CAlert, CFormInput, CButton, CFormCheck, CImage, CForm, CCard } from '@coreui/react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Register = () => {
  
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values, 'datavaues');
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.find((u) => u.email === values.email);

      if (userExists) {
        alert('User already exists');
      } else if (values.firstName === '' || values.lastName === '' || values.email === '' || values.password === '') {
        alert('Please fill all the fields');
      } else if (values.password.length < 6) {
        alert('Password must be at least 6 characters');
      } else {
        users.push(values);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful');
      }
    }
  });

  return (
    <div>
      <CCard style={{ marginLeft: '285px', marginTop: '105px', marginRight: '285px', backgroundColor: 'thistle' }}>
        <CCol style={{ marginLeft: '205px' }} className="mt-4">
          <h2>Register</h2>
        </CCol>
        <CForm onSubmit={formik.handleSubmit}>
          <CCol md={5} className="mt-2 mb-3" style={{ marginLeft: '205px' }}>
            <CFormInput
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="Enter First Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? <div className="text-danger">{formik.errors.firstName}</div> : null}
          </CCol>
          <CCol md={5} className="mt-2 mb-3" style={{ marginLeft: '205px' }}>
            <CFormInput
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Enter Last Name"
            />
            {formik.touched.lastName && formik.errors.lastName ? <div className="text-danger">{formik.errors.lastName}</div> : null}
          </CCol>
          <CCol md={5} className="mt-2 mb-3" style={{ marginLeft: '205px' }}>
            <CFormInput type="text" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Enter Email" />
            {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
          </CCol>
          <CCol md={5} className="mt-2 mb-3" style={{ marginLeft: '205px' }}>
            <CFormInput
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter Password"
            />
            {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
          </CCol>
          <CRow>
            <CCol className="mt-2 mb-3" style={{ marginLeft: '205px' }}>
              <CButton type="submit" color="danger">
                SignUp
              </CButton>
            </CCol>
            <CCol style={{ marginRight: '102px' }} className="mt-2 mb-3">
              <Link to="/login">
                <CButton type="submit" color="dark">
                  SignIn
                </CButton>
              </Link>
            </CCol>
          </CRow>
        </CForm>
      </CCard>
    </div>
  );
};

export default Register;
