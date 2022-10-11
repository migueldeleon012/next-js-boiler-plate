import React from 'react';
import { DrawerItemContainer } from '../../SideBar/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from '../../../../store/hooks';

const TopbarHeader = () => {
  const { toggleMenu } = useGlobalContext();

  return (
    <DrawerItemContainer>
      <MenuIcon
        fontSize="large"
        onClick={() => toggleMenu()}
        color="primary"
      ></MenuIcon>
    </DrawerItemContainer>
  );
};

export default TopbarHeader;
