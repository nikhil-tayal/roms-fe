import { SxProps, Theme } from '@mui/material';

export type ColorEnum =
  | 'primary'
  | 'secondary'
  | 'offWhite'
  | 'orange'
  | 'darkPeach'
  | 'white'
  | 'black'
  | 'gray'
  | 'darkGray'
  | 'lightGray'
  | 'transparent'
  | 'red';

export type CssOverrideType = {
  /**
   * Classname of the component
   */
  className?: string;
  /**
   * ⚠️ Override styles of the component using the sx prop [sx prop](https://mui.com/system/the-sx-prop/).
   * This will be deprecated later, so use it only when absolutely necessary.
   * Also report the same as a tech debt in UI Component library, so that the component apis can be updated.
   */
  sx?: SxProps<Theme>;
};
