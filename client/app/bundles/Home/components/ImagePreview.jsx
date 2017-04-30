import PropTypes from 'prop-types';
import React from 'react';

export default class ImagePreview extends React.Component {
  static propTypes = {
    files: PropTypes.array
  }

  render() {
    if (this.props.files.length === 0) {
      return null;
    }

    return (
      <div className="image-preview">
        {this.props.files.map((file) => {
          return (
            <img
              key={file.name}
              src={file.src} />
          )
        })}
      </div>
    )
  }
}
