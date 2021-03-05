import React from 'react';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from './components/NavBar';
import Feed from './components/Feed';
import { Box, Container } from '@material-ui/core';

const useStayles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    padding: 24,
  },
  toolBar: {
    minHeight: 64,
  },
});

function Home() {
  const classes = useStayles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolBar}></div>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Box display="flex">
            <NavBar />
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Home;
