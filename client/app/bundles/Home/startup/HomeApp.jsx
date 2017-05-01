import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from '../store/homeStore';
import HomeContainer from '../containers/HomeContainer';
import NewHouseContainer from '../containers/NewHouseContainer';
import HouseInfoContainer from '../containers/HouseInfoContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const HomeApp = (props, _railsContext) => {
  const store = configureStore(props);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" exact={true} component={HomeContainer} />
          <Route path="/houses/new" component={NewHouseContainer} />
          <Route path="/houses/:id" component={HouseInfoContainer} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default HomeApp;
