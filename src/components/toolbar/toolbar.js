import React from 'react';
import {Navbar} from 'react-bootstrap';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import {  Trans } from "react-i18next";



const Toolbar = props => {

    // const { t, i18n } = this.props;
    //
    // const changeLanguage = lng => {
    //     i18n.changeLanguage(lng);
    // };



  return  (
    <Headroom
        wrapperStyle={{height: 'auto'}}
       >
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
              <Trans>
                  Pars<b>Jadval</b>
              </Trans>
          </h1>
        </Link>
      </div>
    </Navbar>
  </header>
    </Headroom>
)};

export default Toolbar;
