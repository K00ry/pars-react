import React from 'react';

const HomeGenres = props => {

    let prodName = props.mainObj.map((prod,index) =>(
        <div key={index} className="home-genre-item">
            <a href="#">{prod.a.genre}</a>
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
