import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { getAuthInstance } from '../../firebase/services';
import { handleUserData } from '../services';

export const useUserInfoGetter = () => {
  const [user, setUser] = useState(null);
  const { auth } = getAuthInstance();

  handleUserData(onAuthStateChanged, auth, setUser);

  return { user };
};
