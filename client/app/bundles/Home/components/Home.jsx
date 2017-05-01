import PropTypes from 'prop-types';
import React from 'react';

import HouseTiles from './HouseTiles';

export default class Home extends React.Component {
  static propTypes = {}

  componentWillMount() {
    this.props.featuredHouses();
  }

  render() {
    const {houses} = this.props.home;

    return (
      <div>
        {houses ? <HouseTiles houses={houses} /> : null}
      </div>
    )
  }
}
