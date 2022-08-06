import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const CollectionOverviewContainer = () => {
  const { isLoading } = useSelector(
    createStructuredSelector({
      isLoading: selectIsCollectionFetching,
    })
  );

  return (
    <WithSpinner isLoading={isLoading}>
      <CollectionsOverview />
    </WithSpinner>
  );
};

export default CollectionOverviewContainer;
