import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from '../store/homeStore';
import routes from '../routes/routes';

export default (props, _railsContext) => {
  const store = configureStore(props);

  return (
    <Provider store={store}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Provider>
  );
};
