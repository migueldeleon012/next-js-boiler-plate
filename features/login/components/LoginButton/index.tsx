import React from 'react';
import CustomButton from '../../../../components/Button';
import { useGoogleAuth } from '../../hooks';

const LoginButton = () => {
  const { handleClick } = useGoogleAuth();
  return (
    <CustomButton
      title="log in with google"
      color="primary"
      variant="contained"
      size="large"
      onClick={handleClick}
    />
  );
};

export default LoginButton;
