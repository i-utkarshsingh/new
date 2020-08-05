import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

import { firestore , convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { updateCollection } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollection} = this.props;
    const collectionRef = firestore.collection('collection');
    
    collectionRef.onSnapshot(async snapshop => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
      updateCollection(collectionsMap);
    })
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection : collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);
