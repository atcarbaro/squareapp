import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import ListIcon from '@mui/icons-material/List';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

import { ListItemLink } from 'components/list-item-link';

export const SideBar = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box'
        }
      }}
      variant="permanent"
      anchor="left">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          SquareApp
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItemLink primary="Home" icon={<MapsHomeWorkIcon />} to="/home" />
        <ListItemLink primary="List" icon={<ListIcon />} to="/list" />
      </List>
    </Drawer>
  );
};
