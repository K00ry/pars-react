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
      <header>
    <Headroom
        wrapperStyle={{height: 'auto'}}
       >
        <div className="lang-select">
            <button className={`lang-select--${props.t("lang-class")}`} onClick={() => toggle(lang)}>{langString}</button>
        </div>


    <Navbar staticTop>
      <div className={`header-div ${props.t("lang-class")}`}>
          <div className="btn">
        <span  id="btn" onClick={props.openDrawer}>
          ☰
        </span>
          </div>

        <Link  to="/" className="toolbar-title">
            <img className="toolbar-title__img" src={process.env.PUBLIC_URL + 'img/main-logo.png'}/>
          {/*<h1 className="toolbar-title__h1">*/}
              {/*<Trans>*/}
                  {/*Pars<b> Jadval</b>*/}
              {/*</Trans>*/}
          {/*</h1>*/}
        </Link>
      </div>
    </Navbar>
    </Headroom>
  </header>

)};

export default Toolbar;
