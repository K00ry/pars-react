import React from 'react';


import { Link } from 'react-router-dom';


const HomeProducts = props =>

    <div className={`col-feature ${props.t("lang-class")} ${props.class} `}
         // onClick={props.correctCatalogClick}
    >
        <Link to={props.address}>
            <img src={process.env.PUBLIC_URL + `img/home-notitle/${props.imgSrc}.png`} alt={props.address}/>
            <span className={`image-head ${props.floatDirection}`}>{props.t(props.product)}</span>
        </Link>
    </div>;








export default HomeProducts;