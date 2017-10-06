import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import * as actionCreators from '../actions/offers';

const Search = props =>{
  const searchOffers = bindActionCreators(actionCreators.searchOffers, props.dispatch)
    return(
      <div className="searched_offers">
        <FormGroup validationState="success">
          <FormControl placeholder="Vöruleit" type="text" onKeyUp={(b)=>{searchOffers(b.target.value)}}></FormControl>
        </FormGroup>
      </div>
    )
}

const mapStateToProps=(state)=>{
  return{
    Search: state.search
  }
}
export default connect (mapStateToProps)(Search);
