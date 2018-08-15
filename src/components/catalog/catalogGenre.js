import React from 'react';
import {NavLink} from 'react-router-dom';

const CatalogGenre = props =>{

    // let madeArr =[];
    // for (let myObj in props.productData){
    //     madeArr.push(props.productData[myObj].type);
    // }



    let genres = props.productData.kos.map((prod,index)=>(
        <li key={index} className="a">
            <NavLink to="#">{prod}</NavLink>
        </li>

    ));


  return(

      <div id="genre">
          <h1 className="sub-title">{props.productData.kir}</h1>

              <ul className="genres">
                  {genres}
              </ul>
          </div>
  );
};


export default CatalogGenre;