import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

import { ThemeButton } from '@/widgets/ThemeButton';

export const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Cosmoship Market
        </Typography>
        <Box>
          <ThemeButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
