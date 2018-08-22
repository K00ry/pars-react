import React from 'react';


const GalleryItems = props =>

    <div className="gallery-item">
    <div className="item-img">
        <img src={process.env.PUBLIC_URL + props.img} alt="۵۰*۵۰*۸"/>
    </div>
    <div className="item-title">
        <div className="item-info">مدل : <span>{props.type}</span></div>
        <div className="item-info">تعداد در مترمربع : <span>{props.squareFeet}</span></div>
        <div className="item-info"><span>{props.grey}</span> : طوسی</div>
        <div className="item-info"><span>{props.red}</span> : (قرمز(ایرانی</div>
        <div className="item-info"><span>{props.yellow}</span> : (زرد و قرمز (خارجی</div>
        <div className="item-info"><span>{props.ship}</span> : هزینه بارگیری</div>
    </div>
</div>;



export default GalleryItems;