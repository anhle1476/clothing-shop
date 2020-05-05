import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { firestore, convertSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { updateShopCollection } from "../../redux/shop/shop.action";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage(props) {
  const { match, updateShopCollection, ...otherProps } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribeFromShop = null;
    const shopRef = firestore.collection("shop");
    unsubscribeFromShop = shopRef.onSnapshot(async (snapshot) => {
      const shopData = convertSnapshotToMap(snapshot);
      updateShopCollection(shopData);
      setIsLoading(false);
    });
    // return () => unsubscribeFromShop();
  }, [updateShopCollection]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            {...otherProps}
            isLoading={isLoading}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner {...otherProps} isLoading={isLoading} />
        )}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateShopCollection: (shopData) => dispatch(updateShopCollection(shopData)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
