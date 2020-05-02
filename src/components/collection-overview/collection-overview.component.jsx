import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selector";

import "../../css/collection-overview.style.min.css";

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      <h1>Collections</h1>
      {collections.map(({ id, ...otherShopDataProps }) => (
        <CollectionPreview key={id} {...otherShopDataProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
