import React from 'react';
// import {NavLink} from 'react-router-dom';

const CatalogGenre = props =>





        <li
            className={props.isActive ? 'navigation--active': ''}
            onClick={ props.onActiveTab }
        >
            <span className={`button_example ${props.isActive ? 'navigation--active': ''}
            `}
                onClick={props.correctGallery}
            >{props.productSub}</span>
        </li>;






export default CatalogGenre;