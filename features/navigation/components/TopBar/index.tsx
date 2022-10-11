import React from 'react';
import { AppBar } from '@mui/material';
import TopBarHeader from './TopBarHeader';
import TopBarSearch from './TopBarSearch';
import TopBarProfile from './TopBarProfile';

const TopBar = ({ data }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: '99999',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
        height: 55,
        boxShadow: 'none',
        background: 'white',
        border: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      <TopBarHeader></TopBarHeader>
      <TopBarSearch />
      <TopBarProfile data={data} />
    </AppBar>
  );
};

export default TopBar;
