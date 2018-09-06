import React from 'react';
import {Navbar} from 'react-bootstrap';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import {  Trans } from "react-i18next";



const Toolbar = props => {

    const { i18n } = props;

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };



  return  (
    <Headroom
        wrapperStyle={{height: 'auto'}}
       >
  <header>
    <Navbar>
      <div className={`header-div ${props.t("lang-class")}`}>
        <span
          id="btn"
          onClick={props.openDrawer}
          style={{ fontSize: 30, cursor: 'pointer' }}
        >
          ☰
        </span>



        <Link to="/">
          <h1 className="toolbar-title">
              <Trans>
                  Pars<b> Jadval</b>
              </Trans>
          </h1>
        </Link>
      </div>
    </Navbar>
  </header>
    </Headroom>
)};

export default Toolbar;
