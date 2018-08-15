import React, { Component } from 'react';
import data from '../../data';
import CatalogGenre from './catalogGenre';
import ImgAndTable from './imgAndTable';


export default class Catalog extends Component {


    state = {

        usableData: data.jadval

    };


    componentWillMount(){
        let madeArr =[];
        let jaber= {};
        for (let myObj in this.props.data0){

            madeArr.push(this.props.data0[myObj].type);
        }
            jaber.kir = this.props.data0.a.genreFarsi;
            jaber.kos=madeArr;

        this.setState({
            genreData: jaber
        });

        console.log(jaber);



    }






  render() {
    return (
        <div className="container main">
          <CatalogGenre  productData={this.state.genreData}/>


        <ImgAndTable/>
      </div>
    );
  }
}
