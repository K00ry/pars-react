import React from 'react';
import GalleryItems__en from './galleryItems__en';
import GalleryItems__fa from './galleryItems__fa'


const GalleryItems = props =>{
    let className = `gallery-item ${props.t("lang-class")}`;
    let transComponent;
    className === `gallery-item english` ? transComponent = <GalleryItems__en
        type={props.type}
        squareFeet={props.squareFeet}
        grey={props.grey}
        red={props.red}
        yellow={props.yellow}
        ship={props.ship}
        t={props.t}
    /> : transComponent = <GalleryItems__fa
        type={props.type}
        squareFeet={props.squareFeet}
        grey={props.grey}
        red={props.red}
        yellow={props.yellow}
        ship={props.ship}
        t={props.t}
    />;




    return(
        <div className={className}>
            <div className="gallery-item__img">
                <img src={process.env.PUBLIC_URL + props.img} alt="۵۰*۵۰*۸"/>
            </div>
            {transComponent}
        </div>
    )


};



export default GalleryItems;