import React, { createContext, useState } from "react";

export const existUserContext = createContext();

function UserContext({ children }) {
  const [existUser, setExistUser] = useState("");

  return (
    <existUserContext.Provider value={{ existUser, setExistUser }}>
      {children}
    </existUserContext.Provider>
  );
}

export default UserContext;
