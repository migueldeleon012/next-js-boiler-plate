import React from 'react';
import Sidebar from '../../features/navigation/components/SideBar';
import TopBar from '../../features/navigation/components/TopBar';
import { useGlobalContext } from '../../features/store/hooks';
import { NavbarProps } from './interface';

const Navbar = ({ sideBarData, topBarData }: NavbarProps) => {
  const { menuOpen } = useGlobalContext();

  return (
    <>
      <Sidebar
        variant="persistent"
        anchor="left"
        open={menuOpen}
        data={sideBarData}
      />
      <TopBar data={topBarData} />
    </>
  );
};

export default Navbar;
