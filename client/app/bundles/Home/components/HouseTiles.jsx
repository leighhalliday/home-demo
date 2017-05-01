import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default class HouseTiles extends React.Component {
  static propTypes = {
    houses: PropTypes.array.isRequired
  }

  renderHouseTile = (house) => {
    const image = house.images[0];

    return (
      <Link key={house.id} to={`/houses/${house.id}`}>
        <div className="house-tile">
          <img src={image.thumb_url} />
          <p>{house.city} - {house.price}</p>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div className="house-tiles">
        {this.props.houses.map(house => this.renderHouseTile(house))}
      </div>
    )
  }
}
