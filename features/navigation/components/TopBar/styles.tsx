import { styled } from '@mui/system';

export const topBarHeight = 55;

export const TopBarSearchContainer = styled('div')({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TopBarProfileContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.5rem',
  padding: '10px',
});
