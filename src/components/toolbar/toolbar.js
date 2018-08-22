import React from 'react';
import {Navbar} from 'react-bootstrap';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';


const Toolbar = props => (
    <Headroom wrapperStyle={{backgroundColor: '#000'}}>
  <header>
    <Navbar className="navbar" >
      <div id="main">
        <span
          id="btn"
          onClick={props.openDrawer}
          style={{ fontSize: 30, cursor: 'pointer' }}
        >
          ☰
        </span>
        <Link to="/">
          <h1>
            پارس <b>جدول</b>
          </h1>
        </Link>
      </div>
    </Navbar>
  </header>
    </Headroom>
);

export default Toolbar;
