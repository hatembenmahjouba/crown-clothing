import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = ({ isLoading, children }) => {
  return isLoading ? <Spinner /> : children;
};

export default WithSpinner;
