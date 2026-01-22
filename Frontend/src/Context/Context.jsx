import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const value = {};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
