import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NotFoundScreen = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <Toolbar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Typography
          variant="h3"
          sx={{ flexGrow: 1, fontWeight: 'bold', color: '#607d95', textAlign: 'center' }}>
          Page Not Found
        </Typography>
      </Container>
    </Box>
  );
};
