import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className='shop-page'>
        <h1>COLLECTION</h1>
        {this.state.shopData.map(({ id, ...otherShopDataProps }) => (
          <CollectionPreview key={id} {...otherShopDataProps} />
        ))}
      </div>
    );
  }
}
