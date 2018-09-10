import React, { Component } from 'react';
import {  Route, Switch
    // ,Redirect
} from 'react-router-dom';
import { translate,
    // Trans
} from "react-i18next";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import data from './data';
import Toolbar from './components/toolbar/toolbar';
import SideDrawer from './components/sidedrawer/sidedrawer';
import MainContainer from './components/mainContainer/mainContainer';
import Catalog from './components/catalog/catalog';
import Contact from './components/contact/contact';
import BackDrop from "./components/toolbar/backDrop";
// import NotFound from './components/NotFound';


class App extends Component {

  state = {
    openDrawer : false,
      mainData: data,
      CatalogData: data[0],
      CatalogSpec:data[0][0],
  };
  openDrawer = () => {
    this.setState((prevState) => {
     return  {openDrawer: !prevState.openDrawer}
    })

  };


  render() {

      const { t, i18n } = this.props;


      let catalogRouts =  this.state.mainData.map((arr,i)=>(
          <Route exact key={i} path={`/${i}`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                               t={t}
                                                                               {...routerProps}/>} />
      ));


    return (

        <Route render={({ location }) => (

      <div className="App">


          <Toolbar openDrawer={this.openDrawer}  t={t} i18n={i18n}/>
          <BackDrop openDrawer={this.openDrawer} show={this.state.openDrawer} />
          <SideDrawer closeDrawer={this.openDrawer}
                      show={this.state.openDrawer}
                      dataMain={this.state.mainData}
                      t={this.props.t}

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





          <Contact t={this.props.t}/>
          <footer className={`footer ${this.props.t("lang-class")}`}>
              <h1>©{t("pars-title-footer")}</h1>
          </footer>

      </div>
        )}/>

    );
  }
}

export default translate("translations")(App);
