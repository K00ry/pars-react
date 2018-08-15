import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import data from './data';
import Toolbar from './components/toolbar/toolbar';
import SideDrawer from './components/sidedrawer/sidedrawer';
import MainContainer from './components/mainContainer/mainContainer';
// import Catalog from './components/catalog/catalog';
// import Contact from './components/contact';
import {Navbar} from 'react-bootstrap';

class App extends Component {

  state = {
    openDrawer : false,
      mainData: data,



  };


  rightStateCatalog = rightCat =>{

      this.setState({
          CatalogData: data[rightCat]

      });
  };


  openDrawer = () => {
    this.setState((prevState) => {
     return  {openDrawer: !prevState.openDrawer}
    })

  };


  render() {

    return (
        <BrowserRouter>
      <div className="App">

          <Toolbar openDrawer={this.openDrawer}/>
          <SideDrawer closeDrawer={this.openDrawer}
                      show={this.state.openDrawer}
                      dataMain={this.state.mainData}
                      correctCatalog={this.rightStateCatalog}

          />

          {/*<Route exact path="/" render={()=> <MainContainer dataArray={this.state.mainData}/>} />*/}
          {/*<Route path="/catalog/wet" render={()=> <Catalog data0={this.state.rippedData[0]}/>} />*/}

          {/*<Contact/>*/}
          <Navbar className="footer" fixedBottom>
              <h1>©پارس جدول</h1>
          </Navbar>

      </div>
        </BrowserRouter>
    );
  }
}

export default App;
