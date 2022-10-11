import { Box } from '@mui/system';
import React from 'react';
import { useGlobalContext } from '../../features/store/hooks';

const MainContainer = ({ children }) => {
  const { menuOpen } = useGlobalContext();

  return (
    <Box
      component={'main'}
      sx={{
        marginLeft: menuOpen ? `calc(12.5vw + 10px)` : '10px',
        transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
