import React from 'react';
import Button from '@mui/material/Button';
import { CustomButtonProps } from './interface';

const CustomButton = ({ title, ...props }: CustomButtonProps) => {
  return <Button {...props}>{title}</Button>;
};

export default CustomButton;
