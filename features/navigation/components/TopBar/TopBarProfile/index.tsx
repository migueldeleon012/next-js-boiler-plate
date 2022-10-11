import React from 'react';
import { Avatar } from '@mui/material';
import { TopBarProfileContainer } from '../styles';
import TopBarProfileItem from '../TopBarProfileItem';

const TopBarProfile = ({ data }: { [key: string]: any }) => {
  const renderIcons = (item, index) => {
    return (
      <TopBarProfileItem icon={item.icon} key={index} address={item.address} />
    );
  };

  return (
    <TopBarProfileContainer>
      {data.map(renderIcons)}
      <Avatar
        sx={{
          width: 30,
          height: 30,
          fontSize: '0.8rem',
          lineHeight: 0,
          cursor: 'pointer',
        }}
      >
        M
      </Avatar>
    </TopBarProfileContainer>
  );
};

export default TopBarProfile;
