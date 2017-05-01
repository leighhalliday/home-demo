import PropTypes from 'prop-types';
import React from 'react';

import HouseTiles from './HouseTiles';
import HomeSearch from './HomeSearch';

export default class Home extends React.Component {
  static propTypes = {}

  componentWillMount() {
    this.props.featuredHouses();
  }

  render() {
    const {houses} = this.props.home;

    return (
      <div>
        <HomeSearch search={this.props.search} />
        {houses ? <HouseTiles houses={houses} /> : null}
      </div>
    )
  }
}
