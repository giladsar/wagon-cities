import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import setCities from '../actions/index';
import City from './city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      this.props.cities.map((city) => {
        return <City name={city.name} address={city.address} slug={city.slug} />;
      })
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
