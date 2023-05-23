import { Card, TextField, Typography, useTheme } from '@mui/material';
import React from 'react';

const Login = () => {
  const { spacing } = useTheme();
  return (
    <Card
      sx={{
        width: '40%',
        margin: `${spacing(10)} auto`,
        padding: `${spacing(4)} ${spacing(6)}`
      }}
    >
      <Typography>Enter Your Email</Typography>
      <TextField />
      <Typography>Enter Your Password</Typography>
      <TextField />
    </Card>
  );
};

export default Login;
