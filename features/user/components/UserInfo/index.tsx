import React from 'react';
import { useUserInfoGetter } from '../../hooks';

const UserInfo = () => {
  const { user } = useUserInfoGetter();
  return (
    <>
      <h1>User Info:</h1>
      <h2>{user?.displayName}</h2>
      <h2>{user?.email}</h2>
      <h2>{user?.providerId}</h2>
    </>
  );
};

export default UserInfo;
