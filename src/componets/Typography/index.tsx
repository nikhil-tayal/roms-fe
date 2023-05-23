import { SxProps, Typography as MuiTypography } from '@mui/material';
import { ColorEnum } from 'src/types';

type TypographyProps = {
  children: React.ReactNode;
  color?: ColorEnum | string;
  fontWeight?: 'regular' | 'light' | 'bold' | 'medium';
  sx?: SxProps;
  fontSize?: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  noWrap?: boolean;
};
export default function Typography({
  children,
  color = 'black',
  fontWeight = 'regular',
  sx,
  fontSize = '0.8rem',
  align = 'left',
  variant = 'body1',
  noWrap
}: TypographyProps) {
  return (
    <MuiTypography
      color={color}
      fontWeight={fontWeight}
      sx={{ ...sx, fontSize }}
      align={align}
      variant={variant}
      noWrap={noWrap}
    >
      {children}
    </MuiTypography>
  );
}
