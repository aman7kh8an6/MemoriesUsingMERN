import React, { useState, createContext } from "react";
export const AppContext = createContext(null);

function AuthContextState(props) {
  const [user,setUser] = useState({
      "first_name": "",
      "last_name": ""
  });
  
  return (
    <AppContext.Provider value={[user, setUser]}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AuthContextState;