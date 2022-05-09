import { useMemo, forwardRef } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

import type { ListItemLinkProps } from './list-item-link.types';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const ListItemLink: FC<ListItemLinkProps> = (props) => {
  const { to, primary, icon } = props;

  const CustomLink = (props: ListItemLinkProps) => <Link to={to} {...props} />;

  return (
    <ListItem button component={CustomLink}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};
