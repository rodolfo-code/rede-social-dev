import React from 'react';
// import { Button } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        <div className="">
          <a href="/">Conecta Dev - Alteração</a>
        </div>
        <div className="">
          <span>img1</span>
          <Button color="primary" variant="contained">
            Hello World
          </Button>
          <span>img2</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
