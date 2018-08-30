import React from 'react';


import { Link } from 'react-router-dom';


const HomeProducts = props =>

    <div className={`container col-feature axs${props.class} `}
         // onClick={props.correctCatalogClick}
    >
        <Link to={props.address}>
            <img src={process.env.PUBLIC_URL + `img/home-genre/${props.imgSrc}.png`} alt={props.address}/>
            {/*<span className={`image-head ${props.floatDirection}`}>{props.product}</span>*/}
        </Link>
    </div>;








export default HomeProducts;