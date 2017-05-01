import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import ImagePreview from './ImagePreview';

export default class NewHouse extends React.Component {
  static propTypes = {}

  constructor() {
    super();

    this.state = {
      files: [],
      status: 'new',
      houseId: null
    };
  }

  previewImages = (e) => {
    this.setState({
      files: []
    });

    Array.from(e.target.files).forEach((file) => {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        const filesCopy = this.state.files.slice();
        filesCopy.push({
          name: file.name,
          thumb_src: reader.result,
          medium_src: reader.result
        });

        this.setState({
          files: filesCopy
        });
      });

      reader.readAsDataURL(file);
    });
  }

  submitForm = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('house[city]', this.city.value);
    data.append('house[price]', this.price.value);
    data.append('house[description]', this.description.value);
    Array.from(this.images.files).forEach((file, index) => {
      data.append(`house[images_attributes][${index}][photo]`, file, file.name);
    });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    axios.post('/houses', data, config).then((response) => {
      this.setState({
        status: 'success',
        houseId: response.data.id
      });
    });
  }

  render() {
    if (this.state.status === 'success') {
      return <Redirect to={`/houses/${this.state.houseId}`} />
    }

    return (
      <div>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" type="text" id="city" required ref={(input) => this.city = input}/>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input className="form-control" type="number" id="price" required min="1" step="any" ref={(input) => this.price = input}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" ref={(input) => this.description = input}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="images">Image</label>
            <input className="form-control" type="file" id="images" multiple
              onChange={(e) => this.previewImages(e)}
              ref={(input) => this.images = input} />
          </div>

          <ImagePreview images={this.state.files} />

          <div className="form-group">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
