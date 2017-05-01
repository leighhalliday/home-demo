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
      <div className="home-search">
        <form className="form-inline" onSubmit={(e) => this.submit(e)}>
          <div className="form-group">
            <input className="form-control" type="text" ref={(input) => this.city = input} placeholder="City"/>
          </div>

          <div className="form-group">
            <input className="form-control" type="number" ref={(input) => this.min = input} placeholder="Min Price"/>
          </div>

          <div className="form-group">
            <input className="form-control" type="number" ref={(input) => this.max = input} placeholder="Max Price"/>
          </div>

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    )
  }
}
