
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CCol, CRow, CForm, CFormInput, CButton } from '@coreui/react';

const Payment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data,"ydaa")
    try {
      // Make API request to process payment
      const response = await axios.post('https://api.third-party.com/payments', {
        amount: data.amount,
        cardNumber: data.cardNumber,
        expiryDate: data.expiryDate,
        cvv: data.cvv,
        method: data.paymentMethod
      });

      console.log('Payment successful:', response.data);
      // Handle success - maybe show a success message or redirect to a confirmation page
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle error - display an error message to the user
    }
  };

  return (
    <CForm onSubmit={handleSubmit(onSubmit)}>
      <CRow className="mb-3">
        <CCol md="6">
          <label htmlFor="amount">Amount:</label>
          <CFormInput
            id="amount"
            type="text"
            placeholder="Enter amount"
            {...register('amount', { required: true })}
            className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
          />
          {errors.amount && <div className="invalid-feedback">Amount is required</div>}
        </CCol>
        <CCol md="6">
          <label htmlFor="cardNumber">Card Number:</label>
          <CFormInput
            id="cardNumber"
            type="text"
            placeholder="Enter card number"
            {...register('cardNumber', { required: true, pattern: /^\d{16}$/ })}
            className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
          />
          {errors.cardNumber && <div className="invalid-feedback">Valid card number is required</div>}
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol md="6">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <CFormInput
            id="expiryDate"
            type="text"
            placeholder="Enter expiry date"
            {...register('expiryDate', { required: true, pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/ })}
            className={`form-control ${errors.expiryDate ? 'is-invalid' : ''}`}
          />
          {errors.expiryDate && <div className="invalid-feedback">Valid expiry date is required</div>}
        </CCol>
        <CCol md="6">
          <label htmlFor="cvv">CVV:</label>
          <CFormInput
            id="cvv"
            type="text"
            placeholder="Enter CVV"
            {...register('cvv', { required: true, pattern: /^\d{3}$/ })}
            className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
          />
          {errors.cvv && <div className="invalid-feedback">Valid CVV is required</div>}
        </CCol>
      </CRow>
      <div className="mb-3">
        <label>Payment Method:</label>
        <div className="form-check mt-2">
          <input
            type="radio"
            id="creditCard"
            value="Credit Card"
            {...register('paymentMethod', { required: true })}
            className={`form-check-input ${errors.paymentMethod ? 'is-invalid' : ''}`}
          />
          <label htmlFor="creditCard" className="form-check-label">
            Credit Card
          </label>
        </div>
        <div className="form-check mt-2">
          <input
            type="radio"
            id="googlePay"
            value="Google Pay"
            {...register('paymentMethod', { required: true })}
            className="form-check-input"
          />
          <label htmlFor="googlePay" className="form-check-label">
            Google Pay
          </label>
        </div>
        <div className="form-check mt-2">
          <input
            type="radio"
            id="phonePe"
            value="PhonePe"
            {...register('paymentMethod', { required: true })}
            className="form-check-input"
          />
          <label htmlFor="phonePe" className="form-check-label">
            PhonePe
          </label>
        </div>
        {errors.paymentMethod && <div className="invalid-feedback d-block">Payment method is required</div>}
      </div>
      <CButton type="submit" color="primary">
        Pay Now
      </CButton>
    </CForm>
  );
};

export default Payment;




// GoogleMap.js
// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '800px',
//   height: '400px',
// };

// const center = {
//   lat: -34.397,
//   lng: 150.644,
// };

// const Payment = () => {
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyA1B2C3D4E5F"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Payment;
