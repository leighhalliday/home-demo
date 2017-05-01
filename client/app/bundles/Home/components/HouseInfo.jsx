import PropTypes from 'prop-types';
import React from 'react';

import ImagePreview from './ImagePreview';
import HouseTiles from './HouseTiles';

export default class HouseInfo extends React.Component {
  static propTypes = {}

  componentWillMount() {
    this.props.loadHouse(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.loadHouse(nextProps.match.params.id);
    }
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

  render() {
    const {house, houses} = this.props.home;

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
        {houses ? <HouseTiles houses={houses} /> : null}
      </div>
    )
  }
}
