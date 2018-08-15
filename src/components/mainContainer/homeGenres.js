import React from 'react';
import { Link } from 'react-router-dom';

const HomeGenres = props => {

    let prodName = props.mainObj.map((prod,index) =>(
        <div key={index} className="home-genre-item">
            <Link to={`catalog/${prod[0].genreId}`}>{prod[0].genreFarsi}</Link>
        </div>)
    );


  return (
    <div className="home-genres">
      <div className="home-genres-title">
        <h2>محصولات</h2>
      </div>
        {prodName}
    </div>
  );
};

export default HomeGenres;
