import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';

import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    return (
      <div className='shop-page'>
        <Routes>
          <Route path='/' element={<CollectionOverviewContainer />} />
          <Route path='/:collectionId' element={<CollectionPageContainer />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
