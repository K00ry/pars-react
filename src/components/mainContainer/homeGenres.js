import React from 'react';
import { Link } from 'react-router-dom';

const HomeGenres = props =>


        <div
            // onClick={props.correctCatalogClick}
            className="home-genre-item">
            <Link to={props.address}>
                {props.product}
                </Link>
        </div>;







export default HomeGenres;
