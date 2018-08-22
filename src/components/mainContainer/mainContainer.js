import React from 'react';


import { Parallax } from 'react-parallax';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router-dom';
import HomeGenres from './homeGenres';
import image1 from '../../img/chideman.jpg';
import img from '../../img/khanabig.png';
import HomeProducts from "./homeProducts";

// const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const MainContainer = props => {


  return (
    <div key={props.productSpec.type} className="container main">
      <div className="container head-intro">
        <img
          src={process.env.PUBLIC_URL + 'img/khanabig.png'}
          alt="abbas abad"
        />

      </div>
      <div className="head-intro-sub" />
      <div className="home-genres">
        <div className="home-genres-title">
          <h2>محصولات</h2>
        </div>
        {props.dataArray.map((arr, index) => (
          <HomeGenres
            key={index}
            address={`/catalog/${arr[0].genreEn}`}
            product={arr[0].genreFarsi}
            correctCatalogClick={() => props.correctHomeCatalog(index)}
          />
        ))}
      </div>

      <Parallax bgImage={image1} strength={200}>
        <div style={{ height: 350 }}>
          {/*<div style={insideStyles}>HTML inside the parallax</div>*/}
        </div>
      </Parallax>


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
                  address={`/catalog/${arr[0].genreEn}`}
                  product={arr[0].genreFarsi}
                  correctCatalogClick={() => props.correctHomeCatalog(i)}/>
          )})}





        {/*<div className="container col-feature axs1 ">*/}
          {/*<Link to="/catalog/kafpoosh">*/}
            {/*<span className="image-head f-left"> كفپوش </span>*/}
          {/*</Link>*/}
        {/*</div>*/}
        {/*<div className="container col-feature axs2 ">*/}
          {/*<Link to="/catalog/blook">*/}
            {/*<span className="image-head f-left"> بلوك </span>*/}
          {/*</Link>*/}
        {/*</div>*/}
        {/*<div className="container col-feature axs3 ">*/}
          {/*<Link to="/catalog/mozayik">*/}
            {/*<span className="image-head f-right"> موزاییک </span>*/}
          {/*</Link>*/}
        {/*</div>*/}
        {/*<div className="container col-feature axs4 ">*/}
          {/*<Link to="/catalog/mobleman">*/}
            {/*<span className="image-head f-right"> مبلمان شهري </span>*/}
          {/*</Link>*/}
        {/*</div>*/}
        {/*<div className="container col-feature axs5 ">*/}
          {/*<Link to="/catalog/kaval">*/}
            {/*<span className="image-head f-left"> كول </span>*/}
          {/*</Link>*/}
        {/*</div>*/}
        {/*<div className="container col-feature axs6 ">*/}
          {/*<Link to="/catalog/nj">*/}
            {/*<span className="image-head f-left"> نيوجرسی </span>*/}
          {/*</Link>*/}
        {/*</div>*/}
        {/*<div className="container col-feature axs7 ">*/}
          {/*<Link to="/catalog/dal">*/}
            {/*<span className="image-head f-right"> دال بتني </span>*/}
          {/*</Link>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default MainContainer;
