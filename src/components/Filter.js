import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as actionCreators from '../actions/offers'

const Filter = props =>{
  const filterOffers = bindActionCreators(actionCreators.filterOffers, props.dispatch)
    return(
      <div className="filter_price">
        <select className="btn_filter_price" onChange={(a)=>{filterOffers(a.target.value)}}>
          <option value="choose">Choose filter</option>
          <option value="lowest">Lowest price first</option>
          <option value="highest">Highest price first</option>
        </select>
      </div>
    )
}

const mapStateToProps=(state)=>{
  return{
    Filter: state.filter
  }
}
export default connect (mapStateToProps)(Filter);
