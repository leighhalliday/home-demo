import PropTypes from 'prop-types';
import React from 'react';

import ImagePreview from './ImagePreview';

export default class HouseInfo extends React.Component {
  static propTypes = {}

  componentWillMount() {
    this.props.loadHouse(this.props.match.params.id);
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
    const {house} = this.props.home;

    if (!house) {
      return <div>Loading...</div>
    }

    return (
      <main className="house">
        <h2>{house.city}</h2>
        <h3>{house.price}</h3>
        <p>{house.description}</p>
        <ImagePreview files={this.formatImages(house.images)} />
      </main>
    )
  }
}
