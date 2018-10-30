import React from 'react';
import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';


import { Parallax } from 'react-parallax';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router-dom';
import Unused from "./unused";
import HomeGenres from './homeGenres';
import image1 from '../../img/chideman2.png';
import img from '../../img/khanabig.png';
import HomeProducts from "./homeProducts";

const insideStyles = {background: 'transparent', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const MainContainer = props => {
    const small = process.env.PUBLIC_URL + 'images/sizeset/new/intro-mob.jpg';
    const medium = process.env.PUBLIC_URL + 'images/sizeset/new/intro-tab.jpg';
    const large = process.env.PUBLIC_URL + 'images/sizeset/new/intro-tab.jpg';
    const small_logo = process.env.PUBLIC_URL + 'img/2.png';
    const medium_logo = process.env.PUBLIC_URL + 'img/logo-intro-tab.png';
    const large_logo = process.env.PUBLIC_URL + 'img/logo-intro-tab.png';

  return (
    <div key={props.productSpec.type} className="main">
        <Parallax bgImage={small}
                  bgImageSrcSet={`${small} 768w,${medium} 1280w, ${large} 1440w`}
                  bgImageSizes="(max-width: 768px) 100vw" strength={200}>
            <div className="parallax-my-custom">
                <div
                    // style={insideStyles}
                     className="intro">
                    <img className="intro__img"
                         src={small_logo}
                         srcSet={`${small_logo} 768w,${medium_logo} 1280w, ${large_logo} 1440w`}
                         sizes="(max-width: 768px) 100vw"/>
                    <h2   className={`intro__h2 ${props.t("lang-class")}`}>{props.t("concrete-precast")}</h2>
                </div>


            </div>
        </Parallax>

      {/*<div className="intro">*/}
        {/*<img*/}
            {/*className="intro__img"*/}
          {/*src={small}*/}
          {/*srcSet={`${small} 768w,${medium} 1280w, ${large} 1440w`}*/}
            {/*sizes="(max-width: 768px) 100vw"*/}
          {/*alt="abbas abad"*/}
        {/*/>*/}

          {/*<h2 className={`intro__h2 ${props.t("lang-class")}`}>{props.t("concrete-precast")}</h2>*/}


      {/*</div>*/}






        {/*<Unused/>*/}

        <Grid fluid className="feature_holder">
            <Row >
                <Col xs={12}   sm={4} lg={4}    className="feature">
                    {/*<Thumbnail className="feature__block" src={process.env.PUBLIC_URL + 'images/features/prod1.jpg'} alt="cover for Full Moon Junkies">*/}
                        {/*<h3 className={`feature__block--title ${props.t("lang-class")}`}>{props.t("prod")}</h3>*/}
                        {/*<h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>*/}
                    {/*</Thumbnail>*/}
                    <div className="feature__block">

                        <img  className="feature__block--img" src={process.env.PUBLIC_URL + 'images/features/prod1.jpg'}/>
                    </div>
                    <div className="feature__block">
                        <h3 className={`feature__block--title ${props.t("lang-class")}`}>{props.t("prod")}</h3>
                        <h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>
                    </div>
                </Col>

                <Col xs={12}   sm={4} lg={4}  className="feature">
                    {/*<Thumbnail className="feature__block" src={process.env.PUBLIC_URL + 'images/features/pack1.jpg'} alt="cover for Full Moon Junkies">*/}
                        {/*<h3 className={`feature__block--title ${props.t("lang-class")}`}>{props.t("pack")}</h3>*/}
                        {/*<h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>*/}
                    {/*</Thumbnail>*/}
                    <div className="feature__block">

                        <img  className="feature__block--img" src={process.env.PUBLIC_URL + 'images/features/pack1.jpg'}/>
                    </div>
                    <div className="feature__block">
                        <h3 className={`feature__block--title ${props.t("lang-class")}`}>{props.t("pack")}</h3>
                        <h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>
                    </div>

                </Col>
                <Col xs={12}   sm={4} lg={4}   className="feature">
                    {/*<Thumbnail className="feature__block" src={process.env.PUBLIC_URL + 'images/features/lab1.jpg'} alt="cover for Full Moon Junkies">*/}
                        {/*<h3 className={`feature__block--title ${props.t("lang-class")}`}>{props.t("lab")}</h3>*/}
                        {/*<h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>*/}
                    {/*</Thumbnail>*/}
                    <div className="feature__block">
                        <img  className="feature__block--img" src={process.env.PUBLIC_URL + 'images/features/lab1.jpg'}/>
                    </div>
                    <div className="feature__block">
                        <h3 className={`feature__block--title ${props.t("lang-class")}`}>{props.t("lab")}</h3>
                        <h4 className={`feature__block--text ${props.t("lang-class")}`}>{props.t("labratory")}</h4>
                    </div>
                </Col>

            </Row>

        </Grid>

        <Parallax bgImage={process.env.PUBLIC_URL + 'img/deraz.jpg'} strength={280}>
            <div className="parallax-my-custom-2"
                // style={{ height: '40vh' }}
            >
                <div  style={insideStyles} className={`overlaySection ${props.t("lang-class")}`} >
                    {/*<img className="overlaySection__img" src={process.env.PUBLIC_URL + 'img/kamyon.jpg'}/>*/}
                    <div className="overlaySection__card">
                        <h2 className="overlaySection__card--title">{props.t("pars-title-footer")}</h2>
                        <p className="overlaySection__card--p">{props.t("overlay-paragraph")}</p>
                    </div>
                </div>

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
