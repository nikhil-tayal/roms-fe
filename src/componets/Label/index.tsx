import React from 'react';
import { Typography } from '..';

export type LabelProps = {
  children: React.ReactNode;
};
export default function Label({ children }: LabelProps) {
  return (
    <Typography sx={{ marginBottom: 0.5 }} fontWeight='bold'>
      {children}
    </Typography>
  );
}
