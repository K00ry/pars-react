import React from 'react';


// import { Parallax } from 'react-parallax';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router-dom';
// import HomeGenres from './homeGenres';
// import image1 from '../../img/chideman2.png';
import img from '../../img/khanabig.png';
import HomeProducts from "./homeProducts";

// const insideStyles = {background: 'transparent', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const MainContainer = props => {

    const medium = process.env.PUBLIC_URL + 'images/sizeset/main-mob.png';
    const large = process.env.PUBLIC_URL + 'images/sizeset/main-desk.png';
  return (
    <div key={props.productSpec.type} className="container main">
      <div className="container head-intro">
        <img
          src={large}
          srcSet={`${medium} 768w, ${large} 1280w`}
          alt="abbas abad"
        />

      </div>
      {/*<div className="head-intro-sub" />*/}


      {/*<Parallax bgImage={image1} strength={300}>*/}
        {/*<div style={{ height: '80vh' }}>*/}
            {/*<div className="home-genres" style={insideStyles}>*/}
                {/*<div className="home-genres-title">*/}
                    {/*<h2>{props.t("products")}</h2>*/}
                {/*</div>*/}
                {/*{props.dataArray.map((arr, index) => (*/}
                    {/*<HomeGenres*/}
                        {/*key={index}*/}
                        {/*address={`/${index}`}*/}
                        {/*product={arr[0].genreEn}*/}
                        {/*t={props.t}*/}
                    {/*/>*/}
                {/*))}*/}
            {/*</div>*/}
        {/*</div>*/}
      {/*</Parallax>*/}


      <div className="product-showcase">
          {props.dataArray.map((arr, i) => {
                let floatClass;
                  if (i === 0 || i ===3 || i === 4 || i === 7){
                      floatClass = 'f-right';
                  } else{ floatClass = 'f-left';}
              return(
              <HomeProducts
                  key={i}
                  class={i}
                  floatDirection={floatClass}
                  address={`/${i}`}
                  imgSrc={arr[0].genreEn}
                  product={arr[0].genreEn}
                  t={props.t}

              />
          )})}

      </div>
    </div>
  );
};

export default MainContainer;
