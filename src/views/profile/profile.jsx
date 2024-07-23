import React, { useState, useEffect, useRef, useContext } from 'react';
import { CCol, CRow, CCard, CCardBody, CForm, CFormInput, CButton } from '@coreui/react';
import { defaultphoto } from 'views/field/pic';
import { UserContext } from 'views/Practice/Mycontext';
const Profile = () => {
  const [profile, setProfile] = useState({
    id: '',
    name: '',
    contactno: '',
    email: '',
    Address: '',
    password: '',
    image: ''
  });

  const defaultProfilePic = defaultphoto; // Replace with your default image URL
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const { user, updateUser } = useContext(UserContext); // Destructure context value
  console.log("uservaluedata", user);

  useEffect(() => {
    // Fetch data from localStorage on component mount
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      console.log("userData", userData);
      setProfile({
        id: parsedUserData.profile.id || '',
        name: parsedUserData.profile.name || '',
        contactno: parsedUserData.profile.contactno || '',
        email: parsedUserData.email || '',
        Address: parsedUserData.profile.address || '',
        password: parsedUserData.profile.password || '',
        image: parsedUserData.profile.image || ''
      });
      setImage(parsedUserData.profile.image || '');
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        // Update profile state with the new image
        const updatedProfile = { ...profile, image: reader.result };
        setProfile(updatedProfile);
        // Update localStorage with the new image
        const userData = JSON.parse(localStorage.getItem('userData'));
        userData.profile.image = reader.result;
        localStorage.setItem('userData', JSON.stringify(userData));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const handleClearClick = () => {
    // Clear the image state
    setImage(null);
    // Update profile state with cleared image
    const updatedProfile = { ...profile, image: null };
    setProfile(updatedProfile);
    // Update localStorage with cleared image
    const userData = JSON.parse(localStorage.getItem('userData'));
    userData.profile.image = null;
    localStorage.setItem('userData', JSON.stringify(userData));
    // Reset the file input value (if needed)
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <div>
        <h1>Context API Example: {user}</h1>
      </div>
      <CCard style={{ width: '820px', marginLeft: '61px', marginTop: '12px', border: 'none' }}>
        <CCardBody style={{ background: 'cornflowerblue', borderRadius: '15px' }}>
          <h4 style={{ color: 'white' }}>Your Profile</h4>
        </CCardBody>
        <CCardBody style={{ marginTop: "30px" }}>
          <CForm>
            <CRow>
              <CCol>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  label="Name"
                  placeholder="name@example.com"
                  value={profile.name}
                  readOnly
                />
              </CCol>
              <CCol>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  label="Address"
                  placeholder="name@example.com"
                  value={profile.Address}
                  readOnly
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  label="Contact No"
                  placeholder="name@example.com"
                  value={profile.contactno}
                  readOnly
                />
              </CCol>
              <CCol>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  label="Email address"
                  placeholder="name@example.com"
                  value={profile.email}
                  readOnly
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f0f0f0',
                    marginLeft: '650px',
                    marginTop: '-250px'
                  }}
                >
                  {image ? (
                    <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <img src={defaultProfilePic} alt="Default Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>
                <div style={{ marginLeft: '648px', marginTop: "-9px" }}>
                  <CButton color="primary" onClick={handleEditClick} className="mt-2">
                    Edit
                  </CButton>
                  <CButton color="danger" onClick={handleClearClick} className="ml-2 mt-2">
                    Clear
                  </CButton>
                  <CFormInput type="file" onChange={handleImageChange} style={{ display: 'none' }} ref={fileInputRef} />
                </div>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Profile;

