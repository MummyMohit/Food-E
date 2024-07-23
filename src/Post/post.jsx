
import { useState, useEffect } from 'react';
import Muitable from 'share/muitable';
import axios from 'axios';
import { CFormSelect,CCol,CCard } from '@coreui/react'; // Import CFormSelect from CoreUI
import { UserProvider } from 'views/Practice/Mycontext';

const Post = () => {

  const [post, setPost] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  
  const columns = [
    { field: 'id', headerName: 'Id', width: 170 },
    { field: 'title', headerName: 'Title', width: 170 },
    { field: 'body', headerName: 'CardData', width: 170 }
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(response.data);

      // Extract unique userIds
      const uniqueUserIds = [...new Set(response.data.map(item => item.userId))];
      console.log(uniqueUserIds,"uniqueUserIds")
      setUserIds(uniqueUserIds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      setFilteredPost(post.filter(p => p.userId === parseInt(selectedUserId)));
    } else {
      setFilteredPost(post);
    }
  }, [selectedUserId, post]);

  const handleUserIdChange = (event) => {
    setSelectedUserId(event.target.value);
  };

  return (
    <div>
      <div>
        <CCol md={2} style={{marginLeft:"756px",marginTop:"-73px"}} className="mb-5">
        <CFormSelect 
          aria-label="Default select example"
          id="userIdDropdown"
          value={selectedUserId}
          label={"Select UserId"}
          onChange={handleUserIdChange}
          options={[
            { label: 'Select UserId', value: '' }, // Add an option for 'All'
            ...userIds.map(userId => ({
              label: `UserId ${userId}`,
              value: userId.toString()
            }))
          ]}
        />
        </CCol>
      </div>
      <CCard>
      <Muitable
        columns={columns}
        rows={filteredPost}
      />
      </CCard>
      <UserProvider
      user={userIds}
      />
    </div>
  );
};

export default Post;
