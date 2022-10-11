import React from 'react';
import LoginButton from '../features/login/components/LoginButton';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme';

const Homepage = () => {
  return (
    <div className="home">
      <LoginButton />
    </div>
  );
};

export default Homepage;
