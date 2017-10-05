import React, { Component } from 'react';

class Offer extends Component{
  render(){
    return(
      <div className="single_item">

        <h1>{this.props.offer.title}</h1>
        <a href={this.props.offer.link} />
        <img src={this.props.offer.image} />
        <h2>{this.props.offer.price}</h2>

      </div>
    )
  }
}
export default Offer;
