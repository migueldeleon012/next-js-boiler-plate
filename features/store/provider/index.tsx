import { useState, useMemo, createContext } from 'react';

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState({
    menuOpen: false,
  });

  const value = useMemo(() => {
    const toggleMenu = () =>
      setState({
        ...state,
        menuOpen: !state.menuOpen,
      });
    return { ...state, toggleMenu };
  }, [state]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
