import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const LoadingScreen = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        SquareApp
      </Typography>
    </Container>
  );
};
