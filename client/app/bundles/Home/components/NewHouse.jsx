import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import ImagePreview from './ImagePreview';

export default class NewHouse extends React.Component {
  static propTypes = {}

  constructor() {
    super();

    this.state = {
      files: []
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
          src: reader.result
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
      data.append(`house[images][${index}]`, file, file.name);
    });

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    axios.post('/homes', data, config).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" required ref={(input) => this.city = input}/>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" required min="1" step="any" ref={(input) => this.price = input}/>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" cols="30" rows="10" ref={(input) => this.description = input}></textarea>
          </div>
          <div>
            <label htmlFor="images">Image</label>
            <input type="file" id="images" multiple
              onChange={(e) => this.previewImages(e)}
              ref={(input) => this.images = input} />
          </div>

          <ImagePreview files={this.state.files} />

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
