// src/Login/Login.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate, Link } from 'react-router-dom';
// import { CRow, CCol, CAlert, CFormInput, CButton, CFormCheck, CImage, CForm } from '@coreui/react';
// import { bulb, billgate, Jefbozs } from 'views/field/pic';

// const profile = [
//   {
//     name: 'Bill gate',
//     role: 'Accountate manage',
//     address: 'USA',
//     contactno: '88458908',
//     image: billgate,
//   },
//   {
//     name: 'jeff Bezos',
//     address: 'Indore',
//     role: 'Biller',
//     contactno: '8461809369',
//     image: Jefbozs,
//   },
// ];
// const Login = () => {

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       const data = {
//         email: values.email,
//         password: values.password,
//       }

//      console.log('Form submitted with data:', data);
//       const users = JSON.parse(localStorage.getItem('users')) || [];
//       const user = users.find((u) => u.email === values.email && u.password === values.password);
//       if (user) {
//         alert(`Welcome ${user.firstName} ${user.lastName}`);
       
//         localStorage.removeItem('isLoggedIn');
//         localStorage.removeItem('users');
//         navigate('/dashboard');
//       } else {
//         formik.setFieldError('general', 'Invalid email or password');
//       }
//     },
//   });

//   return (
//     <div>
//       <CRow>
//         <CCol style={{ marginLeft: '179px', marginTop: '105px' }}>
//           <h1>Branch Login</h1>
//           <p>Enter your email and password to login!</p>
//           <hr />
//           {formik.errors.general && <CAlert color="danger">{formik.errors.general}</CAlert>}
//           <CForm onSubmit={formik.handleSubmit}>
//             <CCol md={6} className="mt-4">
//               <CFormInput
//                 type="email"
//                 id="email"
//                 name="email"
//                 label="Email"
//                 placeholder="Enter email here"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     formik.handleSubmit();
//                   }
//                 }}
//                 required
//               />
//               {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
//             </CCol>
//             <CCol md={6} className="mt-2">
//               <CFormInput
//                 type="password"
//                 id="password"
//                 name="password"
//                 label="Password"
//                 placeholder="Enter password here"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     formik.handleSubmit();
//                   }
//                 }}
//                 required
//               />
//               {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
//             </CCol>
//             <CCol className="mt-2">
//               <CFormCheck id="keepLoggedIn" label="Keep me logged in" defaultChecked />
//             </CCol>
//             <CCol className="mt-2">
//               <CButton color="primary" type="submit">
//                 Login
//               </CButton>
//               <Link to="/register">Create Account</Link>
//             </CCol>
//           </CForm>
//         </CCol>
//         <CCol style={{ background: 'cornflowerblue', height: '100vh', borderRadius: '1px 0 3px 111px' }}>
//           <CImage
//             rounded
//             thumbnail
//             src={bulb}
//             width={100}
//             height={100}
//             style={{
//               cursor: 'pointer',
//               marginLeft: '220px',
//               marginTop: '200px',
//             }}
//           />
//           <h1 style={{ color: 'white', marginLeft: '150px', marginTop: '50px' }}>NEABILLING</h1>
//         </CCol>
//       </CRow>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import { CRow, CCol, CAlert, CFormSelect, CFormInput, CButton, CFormCheck, CImage } from '@coreui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { bulb, Jefbozs, billgate } from 'views/field/pic';

const users = [
  {
    email: 'mohitbisen12100@gmail.com',
    password: 'password',
    branch: 'IT',
    profile: {
      name: 'Jeff Bezos',
      address: 'Indore',
      role: 'Biller',
      contactno: '8461809369',
      image: Jefbozs,
    },
  },
  {
    email: 'sagarrana@gmail.com',
    password: 'anotherpassword',
    branch: 'HR',
    profile: {
      name: 'Bill Gates',
      role: 'Account Manager',
      address: 'USA',
      contactno: '88458908',
      image: billgate,
    },
  },
];

const generateOTP = () => Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(null);
  const [user, setUser] = useState(null);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setIsLoggedIn(true);
    }
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    branch: Yup.string().required('Branch is required'),
    otp: showOTP ? Yup.string().length(6, 'Invalid OTP').required('OTP is required') : null,
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      branch: '',
      otp: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (showOTP) {
        handleOTPSubmit(values);
      } else {
        handleLogin(values);
      }
    },
  });

  const handleLogin = async (values) => {
    const { email, password, branch } = values;
    const foundUser = users.find((user) => (user.email === email && user.password === password && user.branch === branch));

    if (foundUser) {
      // Simulated successful login
      const generatedOtp = generateOTP();
      setOtp(generatedOtp); // Store OTP for verification
      setUser(foundUser); // Save user data for later

      // Simulate sending OTP to user (e.g., via email or SMS)
      console.log('Generated OTP:', generatedOtp);

      setShowOTP(true); // Show OTP field
    } else {
      formik.setFieldError('general', 'Invalid credentials');
    }
  };

  const handleOTPSubmit = async (values) => {
    const { otp } = values;

    if (otp === String(otp)) {
      // Simulated OTP verification success
      const userData = {
        isLoggedIn: true,
        email: user.email,
        branch: user.branch,
        profile: user.profile,
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      formik.setFieldError('otp', 'Invalid OTP');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      return;
    }

    try {
      const response = await fetch(`https://example.com/reset-password?email=${resetEmail}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Password reset instructions sent to your email.');
      } else {
        alert('Failed to send password reset instructions. Please try again.');
      }
    } catch (error) {
      alert('An error occurred while sending password reset instructions.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      formik.handleSubmit();
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <div>You are logged in!</div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <CRow>
        <CCol style={{ marginLeft: '179px', marginTop: '105px' }}>
          <h1>Branch Login</h1>
          <p>Enter your email and password to login!</p>
          <hr />
          {formik.errors.general && <CAlert color="danger">{formik.errors.general}</CAlert>}
          {showOTP && formik.errors.otp && <CAlert color="danger">{formik.errors.otp}</CAlert>}
          <CCol md={6}>
            <CFormSelect
              aria-label="Default select example"
              id="branch"
              name="branch"
              value={formik.values.branch}
              onChange={formik.handleChange}
            >
              <option value="">Select your branch...</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              {/* Add more options as needed */}
            </CFormSelect>
            {formik.touched.branch && formik.errors.branch ? (
              <div className="text-danger">{formik.errors.branch}</div>
            ) : null}
          </CCol>
          <CCol md={6} className="mt-4">
            <CFormInput
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="Enter email here"
              value={formik.values.email}
              onChange={(e) => {
                formik.handleChange(e);
                setResetEmail(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </CCol>
          <CCol md={6} className="mt-2">
            <CFormInput
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="Enter password here"
              value={formik.values.password}
              onChange={formik.handleChange}
              onKeyDown={handleKeyDown}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </CCol>
          {showOTP && (
            <CCol md={6} className="mt-2">
              <CFormInput
                type="text"
                id="otp"
                name="otp"
                label="OTP"
                placeholder="Enter OTP here"
                value={formik.values.otp}
                onChange={formik.handleChange}
                onKeyDown={handleKeyDown}
                required
              />
            </CCol>
          )}
          <CCol className="mt-2">
            <CFormCheck id="keepLoggedIn" label="Keep me logged in" defaultChecked />
          </CCol>
          <CCol className="mt-2">
            <CButton color="primary" onClick={formik.handleSubmit}>
              {showOTP ? 'Verify OTP' : 'Login'}
            </CButton>
            {!showOTP && <Link to="/forgot-password">Forgot Password?</Link>}
          </CCol>
        </CCol>
        <CCol style={{ background: 'cornflowerblue', height: '100vh', borderRadius: '1px 0 3px 111px' }}>
          <CImage
            rounded
            thumbnail
            src={bulb}
            width={100}
            height={100}
            style={{ cursor: 'pointer', marginLeft: '220px', marginTop: '200px' }}
          />
          <h1 style={{ color: 'white', marginLeft: '150px', marginTop: '50px' }}>NEABILLING</h1>
        </CCol>
      </CRow>
    </div>
  );
};

export default Login;
