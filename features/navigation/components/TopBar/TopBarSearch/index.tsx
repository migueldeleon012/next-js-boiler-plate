import React from 'react';
import { TopBarSearchContainer } from '../styles';
import { OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';

const TopBarSearch = () => {
  return (
    <TopBarSearchContainer>
      <OutlinedInput
        placeholder="Search..."
        color="neutral"
        sx={{
          border: 'none',
          outline: 'none',
          width: '30%',
          height: '100%',
          borderRadius: 0,
        }}
        size="small"
        endAdornment={<Search />}
      />
    </TopBarSearchContainer>
  );
};

export default TopBarSearch;
