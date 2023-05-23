import { SxProps } from '@mui/material';
import MuiButton from '@mui/material/Button';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'text' | 'contained' | 'outlined';
  sx?: SxProps;
  disabled?: boolean;
  type?:'submit'
};
const Button = ({ children, onClick, variant, sx, disabled , type}: ButtonProps) => {
  return (
    <MuiButton
      onClick={onClick}
      variant={variant}
      fullWidth
      sx={sx}
      disabled={disabled}
      type={type}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
