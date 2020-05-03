import "../../css/collection-preview.style.min.css";
import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

function CollectionPreview({ id, title, routeName, items }) {
  return (
    <div className='collection-preview'>
      <Link to={`shop/${title.toLowerCase()}`} className='title'>
        {title.toUpperCase()}
      </Link>
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
