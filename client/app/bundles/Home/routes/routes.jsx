import { Route, Switch } from 'react-router';

import HomeContainer from '../containers/HomeContainer';
import NewHouseContainer from '../containers/NewHouseContainer';
import HouseInfoContainer from '../containers/HouseInfoContainer';

export default (
  <Switch>
    <Route path="/" exact component={HomeContainer} />
    <Route path="/houses/new" component={NewHouseContainer} />
    <Route path="/houses/:id" component={HouseInfoContainer} />
  </Switch>
);
