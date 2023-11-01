import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { THEME_DARK_COLOR, THEME_LIGHT_COLOR } from '../../Constants';

export const StyledButton = styled('button')(({ theme, width }) => ({
  height: '2.5rem',
  width: width ? width : 'default',
  transition: 'transform 0.3s',
  borderRadius: '0.375rem',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  background: 'linear-gradient(to left, #6e5494, #300066, #300066)',
  color: '#ffffff',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.625rem 1.25rem',
  fontSize: '1rem',
  fontWeight: '500',
  // margin: theme.spacing(1, 0, 0, 0),
  justifyContent: 'space-evenly',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1),
  },
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 1px 8px 0px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.12)',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-input': {
    // padding: '8px !important',
    color: THEME_DARK_COLOR,
  },
  '& label.Mui-focused': {
    color: THEME_LIGHT_COLOR,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: THEME_LIGHT_COLOR,
    },
    '&:hover fieldset': {
      borderColor: THEME_LIGHT_COLOR,
    },
    '&.Mui-focused fieldset': {
      borderColor: THEME_LIGHT_COLOR,
    },
  },
}));