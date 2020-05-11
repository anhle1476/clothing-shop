import CollectionOverview from "./collection-overview.component";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionsFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
export default CollectionOverviewContainer;
