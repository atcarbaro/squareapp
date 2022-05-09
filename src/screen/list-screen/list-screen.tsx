import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Home } from 'components/home-data-form/home-data-form.constants';

import { useAppState } from 'contexts/app-context';

import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

export const ListScreen = () => {
  const appState = useAppState();
  const navigate = useNavigate();

  if (appState.square && !appState.square.length) {
    return (
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold', textAlign: 'center' }}>
          No items found
        </Typography>
      </Box>
    );
  }

  const handleEdit = (id: number) => {
    navigate(`/home/${id}`);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <Toolbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{Home.FIRST_NAME}</TableCell>
              <TableCell align="right">{Home.ADDRESS_1}</TableCell>
              <TableCell align="right">{Home.ADDRESS_2}</TableCell>
              <TableCell align="right">{Home.CITY}</TableCell>
              <TableCell align="right">{Home.STATE}</TableCell>
              <TableCell align="right">{Home.ZIP_CODE}</TableCell>
              <TableCell align="right">{Home.COUNTRY}</TableCell>
              <TableCell align="right">{Home.NUMBER_ROOMS}</TableCell>
              <TableCell align="right">{Home.SQUARE_FOOTAGE}</TableCell>
              <TableCell align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appState.square.map((row, index) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.address1}</TableCell>
                <TableCell align="right">{row.address2}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
                <TableCell align="right">{row.zipCode}</TableCell>
                <TableCell align="right">{row.country}</TableCell>
                <TableCell align="right">{row.numberOfRooms}</TableCell>
                <TableCell align="right">{row.squareFootage} sqft</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleEdit(row.id)}>
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
