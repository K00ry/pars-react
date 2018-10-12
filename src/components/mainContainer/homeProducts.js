import React from 'react';


import { Link } from 'react-router-dom';


const HomeProducts = props =>

    <div className={`product-showcase__items ${props.t("lang-class")} ${props.class} `}
         // onClick={props.correctCatalogClick}
    >
        <Link  className="product-showcase__linkBlock" to={props.address}>
            <img className="product-showcase__linkBlock--image" src={process.env.PUBLIC_URL + `img/home-notitle/${props.imgSrc}.png`} alt={props.address}/>
            <span className={`product-showcase__linkBlock--title ${props.floatDirection}`}>{props.t(props.product)}</span>
        </Link>
    </div>;








export default HomeProducts;