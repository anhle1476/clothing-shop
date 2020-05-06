import React, { useEffect } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionsFetching,
  selectCollections,
} from "../../redux/shop/shop.selector";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({
  match,
  collections,
  isCollectionFetching,
  fetchCollectionStartAsync,
  ...otherProps
}) {
  useEffect(() => {
    !collections && fetchCollectionStartAsync();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <CollectionOverviewWithSpinner
            {...otherProps}
            isLoading={isCollectionFetching}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={() => (
          <CollectionPageWithSpinner
            {...otherProps}
            isLoading={isCollectionFetching}
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  isCollectionFetching: selectCollectionsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
