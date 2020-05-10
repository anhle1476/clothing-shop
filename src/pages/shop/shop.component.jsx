import React, { useEffect } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { createStructuredSelector } from "reselect";
import { selectCollectionsLoaded } from "../../redux/shop/shop.selector";
import { fetchCollectionStart } from "../../redux/shop/shop.action";

function ShopPage({ match, collectionsLoaded, fetchCollectionStart }) {
  useEffect(() => {
    !collectionsLoaded && fetchCollectionStart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collectionsLoaded: selectCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
