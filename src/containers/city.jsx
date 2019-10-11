import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectedCity from '../actions/selected_city';

class City extends Component {


  handleClick = () => {
    this.props.selectedCity(this.props);
    console.log(this.props)
  };
  render() {
    return (
      <div className="city list-group-item" onClick={this.handleClick}> {this.props.name}</div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectedCity: selectedCity },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
