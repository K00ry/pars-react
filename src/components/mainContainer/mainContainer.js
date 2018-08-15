import React from 'react';

import { Parallax } from 'react-parallax';
import HomeGenres from './homeGenres';


import image1 from '../../img/chideman.jpg';
import img from '../../img/khanabig.png';

// const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const MainContainer = props => {
  return (

      <div className="container main">
        <div className="container head-intro">
          <img src={img} alt="abbas abad" />
          <a href="#" />
        </div>
        <div className="head-intro-sub" />
          {/*<HomeGenres*/}
              {/*dataArray={props.dataArray}*/}
          {/*/>*/}



        <Parallax bgImage={image1} strength={200}>
          <div style={{ height: 350 }}>
            {/*<div style={insideStyles}>HTML inside the parallax</div>*/}
          </div>
        </Parallax>

        <div className="container col-feature axs1 ">
          <a href="#">
            <span className="image-head"> سنگفرش </span>
          </a>
        </div>
        <div className="container col-feature axs2 ">
          <a href="#">
            <span className="image-head"> موزاییک </span>
          </a>
        </div>
        <div className="container col-feature axs3 ">
          <a href="#">
            <span className="image-head"> سنگفرش </span>
          </a>
        </div>
      </div>

  );
};

export default MainContainer;
