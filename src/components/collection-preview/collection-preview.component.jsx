import "../../css/collection-preview.style.min.css";
import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

function CollectionPreview({ id, title, routeName, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.map((item, idx) => {
          if (idx >= 4) return null;
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default CollectionPreview;