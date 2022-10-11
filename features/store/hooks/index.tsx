import { useContext } from 'react';
import { GlobalContext } from '../provider';

export const useGlobalContext = () => useContext(GlobalContext);
