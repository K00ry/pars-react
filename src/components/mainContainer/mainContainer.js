import React from 'react';
import HomeGenres from './homeGenres'
import img from '../../img/khana.png';


const MainContainer = props =>{



    return(
        <div className="container main">
            <div className="container head-intro">
                <img src={img} alt="abbas abad" />
                <a href="#" />
            </div>
            <div className="head-intro-sub" />
            {/*   <h2>محصولات</h2> */}



            <HomeGenres mainObj={props.dataObj}/>



            {/* parralex start */}
            <div className="spacer s0" />
            <div id="parallax1" className="parallaxParent">
                <div className="jabeja" />
            </div>
            {/* parralex end */}
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