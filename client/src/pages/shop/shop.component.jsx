import React, { Suspense, useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
const CollectionOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<CollectionOverviewContainer />} />
          <Route path='/:collectionId' element={<CollectionPageContainer />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ShopPage;
