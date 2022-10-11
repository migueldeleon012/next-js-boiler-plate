import { ButtonTypeMap } from '@mui/material';

export type CustomButtonProps = ButtonTypeMap & {
  title?: string;
  onClick?: () => void;
};
