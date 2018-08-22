import React from 'react';

import CatalogGenre from './catalogGenre';
import ImgAndTable from './imgAndTable';
import ImgGallery from './imgGallery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




const Catalog = props => {







      let galleryType = props.productSpec.genreEn !== 'kafpoosh'?

        <ImgAndTable key={props.productSpec.genreId} img={props.productSpec.img}
                                     imageAlt={props.productSpec.type}
                                     tableSizes={props.productSpec.sizes}
          />
          :

          <ImgGallery key={props.productSpec.genreId} passData={props.productSpec.sizes}/>;



    return (
        <div className="container main">

            <div id="genre" key={props.productSpec.genreFarsi}>
                <div><h1 className="sub-title">{props.productData[0].genreFarsi}</h1></div>


            </div>

            <ul   className="genres">
                {props.productData.map((arr,index)=>
                    <CatalogGenre
                        key={index}
                        productEn={arr.genreEn}
                        productSub={arr.type}
                        productId={arr.genreId}
                        correctGallery={()=> props.subGenreSelect(index)}
                        subtag={props.match.url}
                    />
                )}
            </ul>

            <div className="wrapper">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>

                    {galleryType}
                </ReactCSSTransitionGroup>


            </div>


      </div>
    );

};
export default Catalog;
