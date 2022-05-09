import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { HomeDataForm } from 'components/home-data-form';

export const MainScreen = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <Toolbar />
      <HomeDataForm />
    </Box>
  );
};
