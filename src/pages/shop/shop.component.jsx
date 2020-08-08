// import React from "react";
// import { Route } from "react-router-dom";
// import { createStructuredSelector } from "reselect";
// import { connect } from "react-redux";

// import CollectionOverview from "../../components/collections-overview/collections-overview.components";
// import CollectionPage from "../collection/collection.component";

// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
// import { selectIsCollectionFetching , selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// class ShopPage extends React.Component {
//   componentDidMount() {
//     const { fetchCollectionsStartAsync } = this.props;
//     fetchCollectionsStartAsync();
//   }

//   render() {
//     const { match, isCollectionFetching , isCollectionsLoaded } = this.props;
//     return (
//       <div className="shop-page">
//         <Route
//           exact
//           path={`${match.path}`}
//           render={(props) => (
//             <CollectionOverviewWithSpinner
//               isLoading={isCollectionFetching}
//               {...props}
//             />
//           )}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           render={(props) => (
//             <CollectionPageWithSpinner
//               isLoading={!isCollectionsLoaded}
//               {...props}
//             />
//           )}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsLoaded : selectIsCollectionLoaded
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);


import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);