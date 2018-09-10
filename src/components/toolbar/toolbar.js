import React from 'react';
import {Navbar} from 'react-bootstrap';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import {  Trans } from "react-i18next";



const Toolbar = props => {

    const { i18n } = props;

    let langString;
    let lang = props.i18n.language;
    lang === "en" ? lang = "fa" : lang = "en";
    lang === "en" ? langString = "English" : langString = "فارسی";
    const toggle = lng => i18n.changeLanguage(lng);



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

              <div className="lang-select">
                  <button className={`lang-select--${props.t("lang-class")}`} onClick={() => toggle(lang)}>{langString}</button>
              </div>



        <Link  to="/" className="toolbar-title">
          <h1 className="toolbar-title__h1">
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
