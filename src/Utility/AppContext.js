import React, { createContext, useContext } from 'react';
import { useMediaQuery } from '@mui/material';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  // const user = LocalStorage.getUser();
  // const isLoggedIn = Boolean(user);
  const deskTopView = useMediaQuery('(min-width:600px)');
  const contextValue = {
    // user,
    // isLoggedIn,
    deskTopView
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
