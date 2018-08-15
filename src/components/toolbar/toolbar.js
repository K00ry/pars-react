import React from 'react';
import {Navbar} from 'react-bootstrap';

const Toolbar = props => (
  <header>
    <Navbar className="navbar" fixedTop fluid>
      <div id="main">
        <span
          id="btn"
          onClick={props.openDrawer}
          style={{ fontSize: 30, cursor: 'pointer' }}
        >
          ☰
        </span>
        <a>
          <h1>
            پارس <b>جدول</b>
          </h1>
        </a>
      </div>
    </Navbar>
  </header>
);

export default Toolbar;
