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
    let sideDrawWidth;
    if (this.props.show) {
      sideDraw = 'sidenav nav-open';
      sideDrawWidth = { width: '200px' };
    }
    let subNavOpen = 'arrow-left-icon-1 arrow-style';
    let subOpenDisplay;
    if (this.state.productSubNavOpen) {
      subNavOpen = 'arrow-left-icon-1 arrow-style expand';
      subOpenDisplay = {
        maxHeight: '20em',
      };
    }



    return (
      <div id="mySidenav" style={sideDrawWidth} className={sideDraw}>
        <a onClick={this.props.closeDrawer} className="closebtn">
          ×
        </a>
        <ul className="sideNav-title">


          <li className="sidenav-li" onClick={this.props.closeDrawer}>
            <Link to="/" className="sidenav-home-btn"  >
              <h2>صفحه اصلی</h2>
            </Link>
          </li>


          <li>


            <div
              className="nav-link-1 nav-link-style"
              onClick={this.subNavToggle}
            >


              <div className="jakesh">
                <img className={subNavOpen} src={logo} alt="Arrow" />
              </div>
              <div>محصولات</div>
            </div>

            <div className="nav 1" style={subOpenDisplay}>

              <ul className="sideNav-sub">
                {this.props.dataMain.map((arr, index) => (
                  <Sublinks
                    key={index}
                    address={`/catalog/${arr[0].genreEn}`}
                    product={arr[0].genreFarsi}
                    correctCatalogClick={() => this.props.correctCatalog(index)}
                    closeNav={this.props.closeDrawer}
                  />
                ))}


              </ul>
            </div>
          </li>
          <li>
            <div
              className="nav-link-1 nav-link-style"
              onClick={this.subNavToggle}
            >
              <div className="jakesh">
                <img className={subNavOpen} src={logo} alt="Arrow" />
              </div>
              <div>تماس</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
