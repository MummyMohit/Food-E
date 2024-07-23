import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
// Create a context with a default value
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Guest');
  const[apk,setApk] = useState([]);
  
  const fetchdata = async () =>{
    const reasponse = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
    // console.log(reasponse);
    setApk(reasponse.data)
  }

  useEffect(()=>{
    fetchdata()
  },[])
  
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser,apk }}>
      {children}
    </UserContext.Provider>
  );
};
