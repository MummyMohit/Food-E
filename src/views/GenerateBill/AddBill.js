import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CCol, CForm, CFormInput, CButton, CRow } from '@coreui/react';
import Row from '../../../node_modules/react-bootstrap/esm/Row';

const AddBill = (props) => {
  // Define prop types
  const rowsdata = props.rows
  console.log(rowsdata,"rowsdaa")
  AddBill.propTypes = {
    handleCloseClick: PropTypes.func // Assuming 'handleCloseClick' is a function prop
  };

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    billNumber: Yup.string().required('Bill Number is required')
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      billNumber: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
      console.log(values);
      // Add your form submission logic here
    }
  });

  // Handle close click
  const handleClose = () => {
    if (props.handleCloseClick) {
      props.handleCloseClick();
    }
  };

  return (
    <>
      <CForm onSubmit={formik.handleSubmit}>
        <CCol className="mt-1">
          <CFormInput
            type="text"
            id="name"
            name="name"
            label="Name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            invalid={formik.touched.name && !!formik.errors.name}
            valid={formik.touched.name && !formik.errors.name}
          />
          {formik.touched.name && formik.errors.name ? <div className="invalid-feedback">{formik.errors.name}</div> : null}
        </CCol>
        <CCol className="mt-2">
          <CFormInput
            type="email"
            id="email"
            name="email"
            label="Email address"
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            invalid={formik.touched.email && !!formik.errors.email}
            valid={formik.touched.email && !formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
        </CCol>
        <CCol className="mt-2">
          <CFormInput
            type="text"
            id="address"
            name="address"
            label="Address"
            placeholder="Enter your address"
            value={formik.values.address}
            onChange={formik.handleChange}
            invalid={formik.touched.address && !!formik.errors.address}
            valid={formik.touched.address && !formik.errors.address}
          />
          {formik.touched.address && formik.errors.address ? <div className="invalid-feedback">{formik.errors.address}</div> : null}
        </CCol>
        <CCol className="mt-2">
          <CFormInput
            type="text"
            id="billNumber"
            name="billNumber"
            label="Bill Number"
            placeholder="Enter Bill No. here.."
            value={formik.values.billNumber}
            onChange={formik.handleChange}
            invalid={formik.touched.billNumber && !!formik.errors.billNumber}
            valid={formik.touched.billNumber && !formik.errors.billNumber}
          />
          {formik.touched.billNumber && formik.errors.billNumber ? (
            <div className="invalid-feedback">{formik.errors.billNumber}</div>
          ) : null}
        </CCol>
        <CRow className="mt-2">
          <CCol md={3}>
            <CButton color="danger" type="submit">
              Save
            </CButton>
          </CCol>
          <CCol>
            <CButton color="light" onClick={handleClose}>
              Cancel
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </>
  );
};

export default AddBill;
