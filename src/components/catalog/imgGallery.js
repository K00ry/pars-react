import React from 'react';
import GalleryItems from './galleryItems';

const ImgGallery = props => {
  return (

      <div className="group" style={{}}>
        <div className="gallery-wrapper">
          {props.passData.map((arr, index) => (
            <GalleryItems
              key={index}
              img={arr.img}
              type={arr.type}
              squareFeet={arr.inSquarefeet}
              grey={arr.toosi}
              red={arr.red}
              yellow={arr.yellowmix}
              ship={arr.shipping}
            />
          ))}
        </div>
      </div>

  );
};

export default ImgGallery;
