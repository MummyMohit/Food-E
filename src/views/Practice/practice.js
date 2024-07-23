import { useState } from "react";
import { UserProvider } from "./Mycontext";
import Context from "./context";

const Practice = () => {

  return (
    <>
  <UserProvider>
      <div>
        <h1>Context API Example</h1>
        <Context />
      </div>
    </UserProvider>
    </>
  );
};

export default Practice;