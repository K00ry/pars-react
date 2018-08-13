import React from 'react';

const Toolbar = props => (
  <header>
    <nav className="navbar navbar-fixed-top" data-nav-status="toggle">
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
    </nav>
  </header>
);

export default Toolbar;
