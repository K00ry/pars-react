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

      // let catalogRouts =  this.state.CatalogData.map((arr,i)=>(
      //     <Route exact key={i} path={`/catalog/${arr.genreEn}`} render={(routerProps)=> <Catalog productData={this.state.CatalogData}
      //                                                              productSpec={this.state.CatalogSpec}
      //                                                              mainOfMain={this.state.mainData}
      //                                                              {...routerProps}
      //                                                              subGenreSelect={this.subGenreView}/>} />
      // ));
      // let catalogRouts =  this.state.CatalogData.map((arr,i)=>(
      //     <Route exact key={i} path={`/${i}`} render={(routerProps)=> <Catalog productData={this.state.CatalogData}
      //                                                                                            productSpec={this.state.CatalogSpec}
      //                                                                                            mainOfMain={this.state.mainData}
      //                                                                                            {...routerProps}
      //                                                                                            subGenreSelect={this.subGenreView}/>} />
      // ));

    return (

        <Route render={({ location }) => (

      <div className="App">

          <Toolbar openDrawer={this.openDrawer}/>
          <SideDrawer closeDrawer={this.openDrawer}
                      show={this.state.openDrawer}
                      dataMain={this.state.mainData}
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
                                 // correctHomeCatalog={this.rightStateCatalog}
                  />
              } />
              {/*{catalogRouts}*/}
              {/*<Route render={()=>*/}
                  {/*<MainContainer dataArray={this.state.mainData}*/}
                                 {/*productSpec={this.state.CatalogSpec}*/}
                                 {/*correctHomeCatalog={this.rightStateCatalog}/>} />/>*/}
              <Route exact path={`/0`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                        {...routerProps}/>} />
              <Route exact path={`/1`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                        {...routerProps}/>} />
              <Route exact path={`/2`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                        {...routerProps}/>} />

              <Route exact path={`/3`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                          {...routerProps}/>} />
              <Route exact path={`/4`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                        {...routerProps}/>} />
              <Route exact path={`/5`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                        {...routerProps}/>} />
              <Route exact path={`/6`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                        {...routerProps}/>} />
              <Route exact path={`/7`} render={(routerProps)=> <Catalog mainOfMain={this.state.mainData}
                                                                        {...routerProps}/>} />


               {/*<Redirect to="/"/>*/}


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
