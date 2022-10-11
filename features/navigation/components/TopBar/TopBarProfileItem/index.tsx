import React from 'react';
import { Box, Container } from '@mui/material';
import { useNavigateOnNavbar } from '../../../hooks';
import * as MuiIcons from '@mui/icons-material';

const TopBarProfileItem = ({ address, icon }) => {
  const { handleClick } = useNavigateOnNavbar(address);
  const Icon = MuiIcons[icon];

  return (
    <Container
      onClick={handleClick}
      disableGutters={true}
      sx={{
        borderRadius: '50%',
        height: 35,
        width: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '300ms',
        ['&:hover']: {
          backgroundColor: 'neutral.main',
        },
      }}
    >
      <Icon fontSize="small" />
    </Container>
  );
};

export default TopBarProfileItem;
