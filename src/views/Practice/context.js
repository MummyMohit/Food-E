import { UserContext } from "./Mycontext";
import React, { useContext } from 'react';

const Context = ({ children }) => {
  
  const { user } = useContext(UserContext);

  console.log(user,"user")
  return (
    <>
      <div>
      <h2>Current User: {user}</h2>
    </div>
    </>
  );
};

export default Context;
