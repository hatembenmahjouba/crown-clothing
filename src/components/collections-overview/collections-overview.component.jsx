import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collections-overview.styles.jsx';

const CollectionsOverview = () => {
  const { collections } = useSelector(
    createStructuredSelector({
      collections: selectCollectionsForPreview,
    })
  );
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

export default CollectionsOverview;
