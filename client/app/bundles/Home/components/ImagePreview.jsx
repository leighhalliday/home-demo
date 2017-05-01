import PropTypes from 'prop-types';
import React from 'react';
import Lightbox from 'react-images';

export default class ImagePreview extends React.Component {
  static propTypes = {
    images: PropTypes.array
  }

  constructor() {
    super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};
  }

  openLightbox = (index, event) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}

	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

	gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
	}

	handleClickImage = () => {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}

  formattedImages = () => (
    this.props.images.map((image) => (
      {src: image.medium_src}
    ))
  )

  renderThumbnails = () => {
    return (
      <div className="preview-thumbs">
        {this.props.images.map((image, index) => {
          return (
            <a
              href="#"
              key={index}
              onClick={(e) => this.openLightbox(index, e)}>
              <img src={image.thumb_src} />
            </a>
          )
        })}
      </div>
    )
  }

  render() {
    if (this.props.images.length === 0) {
      return null;
    }

    return (
      <div>
        {this.renderThumbnails()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.formattedImages()}
          isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
					showThumbnails={true}
        />
      </div>
    )
  }
}
