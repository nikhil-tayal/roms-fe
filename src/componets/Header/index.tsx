import { Box, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { push } = useRouter();

  const onGetStarted = () => {
    push('/login');
  };

  return (
    <AppBar position='static'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Image src={'/logo.png'} alt='Roms' width={120} height={30} />
        <Button sx={{ color: 'white' }} onClick={onGetStarted}>
          Get Started
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
