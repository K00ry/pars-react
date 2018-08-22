import React, { Component } from 'react';
import {  Route, Switch
    // ,Redirect
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import data from './data';
import Toolbar from './components/toolbar/toolbar';
import SideDrawer from './components/sidedrawer/sidedrawer';
import MainContainer from './components/mainContainer/mainContainer';
import Catalog from './components/catalog/catalog';
import Contact from './components/contact';
// import {Navbar} from 'react-bootstrap';

class App extends Component {

  state = {
    openDrawer : false,
      mainData: data,
      CatalogData: data[0],
      CatalogSpec:data[0][0]



  };


  rightStateCatalog = rightCat =>{

      this.setState({
          CatalogData: data[rightCat],
          CatalogSpec:data[rightCat][0]

      });
  };



  openDrawer = () => {
    this.setState((prevState) => {
     return  {openDrawer: !prevState.openDrawer}
    })

  };
    subGenreView = chosen => {

        this.setState({

            CatalogSpec: this.state.CatalogData[chosen]
        });



    };




  render() {

      let catalogRouts =  this.state.CatalogData.map((arr,i)=>(
          <Route exact key={i} path={`/catalog/${arr.genreEn}`} render={(routerProps)=> <Catalog productData={this.state.CatalogData}
                                                                   productSpec={this.state.CatalogSpec}
                                                                   {...routerProps}
                                                                   subGenreSelect={this.subGenreView}/>} />
      ));

    return (
        <Route render={({ location }) => (
      <div className="App">

          <Toolbar openDrawer={this.openDrawer}/>
          <SideDrawer closeDrawer={this.openDrawer}
                      show={this.state.openDrawer}
                      dataMain={this.state.mainData}
                      correctCatalog={this.rightStateCatalog}/>

          <TransitionGroup>
              <CSSTransition
                  timeout={500}
                  key={location.key}
                  classNames='slide'>

          <Switch location={location}>
              <Route  exact path="/" render={()=>
                  <MainContainer dataArray={this.state.mainData}
                                 productSpec={this.state.CatalogSpec}
                                 correctHomeCatalog={this.rightStateCatalog}/>} />
              {catalogRouts}

               {/*<Redirect push to="/catalog/jadval"/>*/}


          </Switch>
              </CSSTransition>
          </TransitionGroup>





          <Contact/>
          <footer className="footer" >
              <h1>©پارس جدول</h1>
          </footer>

      </div>
        )}/>

    );
  }
}

export default App;
