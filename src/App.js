import React, { Component } from 'react';
import {  Route, Switch
    // ,Redirect
} from 'react-router-dom';
import { translate, Trans } from "react-i18next";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import data from './data';
import Toolbar from './components/toolbar/toolbar';
import SideDrawer from './components/sidedrawer/sidedrawer';
import MainContainer from './components/mainContainer/mainContainer';
import Catalog from './components/catalog/catalog';
import Contact from './components/contact';
// import NotFound from './components/NotFound';
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
          CatalogSpec:data[rightCat][1]

      });
  };



  openDrawer = () => {
    this.setState((prevState) => {
     return  {openDrawer: !prevState.openDrawer}
    })

  };
    // subGenreView = chosen => {
    //
    //     this.setState({
    //
    //         CatalogSpec: this.state.CatalogData[chosen]
    //     });
    //
    //
    //
    // };




  render() {

          const { t, i18n } = this.props;

          const changeLanguage = lng => {
              i18n.changeLanguage(lng);
          };

      let catalogRouts =  this.state.mainData.map((arr,i)=>(
          <Route exact key={i} path={`/${i}`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                               t={this.props.t}
                                                                               {...routerProps}/>} />
      ));


    return (

        <Route render={({ location }) => (

      <div className="App">
          <button onClick={() => changeLanguage("fa")}>fa</button>
          <button onClick={() => changeLanguage("en")}>en</button>

          <Toolbar openDrawer={this.openDrawer}  t={this.props.t} />
          <SideDrawer closeDrawer={this.openDrawer}
                      show={this.state.openDrawer}
                      dataMain={this.state.mainData}
                      t={this.props.t}
                      // correctCatalog={this.rightStateCatalog}
          />

          <TransitionGroup>
              <CSSTransition
                  timeout={500}
                  key={location.key}
                  classNames='slide'>

          <Switch location={location}>
              <Route  exact path="/" render={()=>
                  <MainContainer dataArray={this.state.mainData}
                                 productSpec={this.state.CatalogSpec}
                                 t={this.props.t}/>
              } />
              {catalogRouts}

          </Switch>
              </CSSTransition>
          </TransitionGroup>





          <Contact/>
          <footer className="footer" >
              <h1>©{t("pars-title-footer")}</h1>
          </footer>

      </div>
        )}/>

    );
  }
}

export default translate("translations")(App);
