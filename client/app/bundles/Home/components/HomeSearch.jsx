import PropTypes from 'prop-types';
import React from 'react';

export default class HomeSearch extends React.Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  }

  submit = (e) => {
    e.preventDefault();

    this.props.search(
      this.city.value,
      this.min.value,
      this.max.value
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submit(e)}>
          <input type="text" ref={(input) => this.city = input} placeholder="City"/>
          <input type="number" ref={(input) => this.min = input} placeholder="Min Price"/>
          <input type="number" ref={(input) => this.max = input} placeholder="Max Price"/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}
