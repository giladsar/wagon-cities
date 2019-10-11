import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectedCity from '../actions/selected_city';


class SelectedCity extends Component {

  render() {
    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`
    return(
      <div className="selectedCity">
        <h2>{this.props.selectedCity.name}</h2>
        <p>{this.props.selectedCity.address}</p>
        <img src={url}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity
  };
};

export default connect(mapStateToProps)(SelectedCity);
