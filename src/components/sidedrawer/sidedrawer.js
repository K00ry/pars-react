import React, { Component } from 'react';
import Sublinks from './subLinks';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
// import data from '../../data';

class SideDrawer extends Component {
  state = {
    productSubNavOpen: false,
  };

  subNavToggle = () => {
    this.setState(prevState => {
      return { productSubNavOpen: !prevState.productSubNavOpen };
    });
  };

  render() {
    let sideDraw = 'sidenav';

    if (this.props.show) {
      sideDraw = 'sidenav nav-open';

    }
    let subNavOpen = 'arrow-style';
    let subOpenDisplay;
    if (this.state.productSubNavOpen) {
      subNavOpen = 'arrow-style expand';
      subOpenDisplay = {
        maxHeight: '30em',
      };
    }

    return (
      <div id="mySidenav" className={`${this.props.t("sideNav-class-select")} ${sideDraw}`}>
        <a onClick={this.props.closeDrawer} className="closebtn">
          ×
        </a>
        <ul className={`sideNav-title ${this.props.t("lang-class")}`}>
          <li className="sidenav-home" onClick={this.props.closeDrawer}>
            <Link to="/" className="sidenav-home-btn">
                {this.props.t("sideNav-home")}
            </Link>
          </li>

          <li className="sidenav-li-drop">
            <div className="nav-link-style"
              onClick={this.subNavToggle}>
              <div>
                <img className={subNavOpen} src={logo} alt="Arrow" />
              </div>
              <div>{this.props.t("products")}</div>
            </div>

            <div className="nav" style={subOpenDisplay}>
              <ul className="sideNav-sub">
                {this.props.dataMain.map((arr, index) => (
                  <Sublinks
                      t={this.props.t}
                    key={index}
                    address={`/${index}`}
                    product={arr[0].genreEn}
                    // correctCatalogClick={() => this.props.correctCatalog(index)}
                    closeNav={this.props.closeDrawer}
                  />
                ))}
              </ul>
            </div>
          </li>
          <li className="sidenav-li-drop">
            <div className="nav-link-style" onClick={this.subNavToggle}>
              <div>
                {/*<img className={subNavOpen} src={logo} alt="Arrow" />*/}
              </div>
              <div>{this.props.t("contact")}</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
