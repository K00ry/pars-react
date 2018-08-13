import React, { Component } from 'react';
 import data from './data';
import Toolbar from './components/toolbar/toolbar'
import SideDrawer from './components/sidedrawer/sidedrawer'
import MainContainer from './components/mainContainer/mainContainer'

class App extends Component {

  state = {
    openDrawer : false,


  };
  componentWillMount(){
      let stripedObject =[];
      for (let myObj in data){
          stripedObject.push(data[myObj]);
      }
      this.setState({
          rippedData: stripedObject
      });
  }


  openDrawer = () => {
    this.setState((prevState) => {
     return  {openDrawer: !prevState.openDrawer}
    })

  };


  render() {

    return (
      <div className="App">
          <SideDrawer closeDrawer={this.openDrawer}
                      show={this.state.openDrawer}
                      dataObj={this.state.rippedData}/>

          <Toolbar openDrawer={this.openDrawer}/>

          <MainContainer dataObj={this.state.rippedData}/>


              <div className="contact container m-x-auto">
                  <div className="top-nav">
                      <a href="#" id="back-to-top">
                          <svg className="arrow-icon">
                              <use xlinkHref="#arrow-up" />
                          </svg>
                          <br />بالایه صفحه
                      </a>
                  </div>
                  <div className="contact-info">
                      <h4><a href="tel:+989121180175">۹۱۲-۱۱۸-۰۱۷۵</a> <span>: تلفن همراه</span></h4>
                      <h4><a href="tel:+989123368183">۹۱۲-۳۳۶-۸۱۸۳</a> <span>: تلفن همراه</span></h4>
                      <h4><span>آدرس:</span>ورامین بعد از میدان ولیعصر جنب کوی جعفر آباد</h4>
                      <h4><a href="mailto:info@parsjadval.ir">info@parsjadval.ir</a><span>:ایمل</span></h4>
                  </div>
              </div>
              <footer>
                  <h1>©پارس جدول</h1>
              </footer>

      </div>
    );
  }
}

export default App;
