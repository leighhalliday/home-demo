import PropTypes from 'prop-types';
import React from 'react';

import ImagePreview from './ImagePreview';
import HouseTiles from './HouseTiles';

export default class HouseInfo extends React.Component {
  static propTypes = {}

  componentWillMount() {
    if (this.needHouse(this.props)) {
      this.props.loadHouse(this.props.match.params.id);
    }
    this.props.featuredHouses();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.loadHouse(nextProps.match.params.id);
    }
  }

  needHouse = (props) => {
    const {house} = this.props.home;
    if (!house) {
      return true;
    }

    return false;
  }

  formatImages = (images) => {
    return images.map((image) => {
      return {
        name: image.id,
        thumb_src: image.thumb_url,
        medium_src: image.medium_url
      }
    })
  }

  filteredHouses = () => {
    const {houses} = this.props.home;

    if (!houses) {
      return false;
    }
    if (!this.props.home.house) {
      return false;
    }

    return houses.filter((house) => {
      return house.id !== this.props.home.house.id;
    });
  }

  render() {
    const {house} = this.props.home;

    if (!house) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <main className="house">
          <h2>{house.city}</h2>
          <h3>{house.price}</h3>
          <p>{house.description}</p>
          <ImagePreview images={this.formatImages(house.images)} />
        </main>
        {this.filteredHouses() ? <HouseTiles houses={this.filteredHouses()} /> : null}
      </div>
    )
  }
}
