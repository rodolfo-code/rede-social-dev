import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
  },
  button: {
    width: '100%',
  },
}));

const tags = [
  { id: 1, name: 'reacjs' },
  { id: 2, name: 'javascript' },
  { id: 3, name: 'dotnet' },
  { id: 4, name: 'php' },
  { id: 5, name: 'materialdesign' },
  { id: 6, name: 'webdev' },
];

function NavBar() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Button className={classes.button} variant="outlined" color="secondary">
        Registrar Grátis
      </Button>
      <ListSubheader component="div" id="nested-list-subheader">
        Tags em Alta
      </ListSubheader>
      {tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`${item.name}`} />
        </ListItem>
      ))}
    </Paper>
  );
}

export default NavBar;
