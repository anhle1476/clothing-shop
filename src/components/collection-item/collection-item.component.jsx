import React from "react";
import "../../css/collection-item.style.min.css";

const CollectionItem = ({ item }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className='collection-footer'>
        <div className='name'>{item.name}</div>
        <div className='price'>{item.price + "$"}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
