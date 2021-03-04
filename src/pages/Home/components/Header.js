import React from 'react';

import { Button, Toolbar, SvgIcon, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Bell } from 'react-feather';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
  },
  bell: {
    marginRight: 10,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="fixed" color="inherit">
      <Toolbar>
        <img className={classes.img} src="/images/logo.png" alt="Logo" />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Novo Post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Remy Sharp" src="" />
        </div>
        {/* <div className="">
          <a href="/">Conecta Dev - Alteração</a>
          <input type="text" />
        </div>
        <div className="">
          <Button color="primary" variant="contained">
            Hello World
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
