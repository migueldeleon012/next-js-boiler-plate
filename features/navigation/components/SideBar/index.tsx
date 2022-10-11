import React from 'react';
import { Drawer, Divider } from '@mui/material';
import DrawerItem from './DrawerItem';
import { Spacer } from '../../../../pages/dashboard/styles';

const Sidebar = ({ data, ...props }) => {
  const renderItem = (item, index) => (
    <DrawerItem
      icon={item.icon}
      content={item.content}
      key={index}
      address={item.address}
    />
  );

  const renderSection = (item, index) => (
    <div key={index}>
      {item.content.map(renderItem)}
      <Divider />
    </div>
  );

  return (
    <Drawer {...props}>
      <Spacer />
      {data.map(renderSection)}
    </Drawer>
  );
};

export default Sidebar;
