import React from 'react';
import { DrawerItemContainer } from '../styles';
import * as MuiIcons from '@mui/icons-material';
import { useNavigateOnNavbar } from '../../../hooks';
import { Typography } from '@mui/material';

const DrawerItem = ({
  icon,
  content,
  address,
}: {
  icon: string;
  content: string;
  address: string;
}) => {
  const { handleClick } = useNavigateOnNavbar(address);
  const Icon = MuiIcons[icon];

  return (
    <DrawerItemContainer onClick={handleClick}>
      <Icon />
      <Typography>{content}</Typography>
    </DrawerItemContainer>
  );
};

export default DrawerItem;
