import { useSelector } from 'react-redux';
import React from 'react';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const CollectionPageContainer = () => {
  const { isLoading } = useSelector(
    createStructuredSelector({
      isLoading: (state) => !selectIsCollectionsLoaded(state),
    })
  );
  return (
    <WithSpinner isLoading={isLoading}>
      <CollectionPage />
    </WithSpinner>
  );
};

export default CollectionPageContainer;
