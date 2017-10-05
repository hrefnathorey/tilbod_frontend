import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Offer from './components/Offer';
import Filter from './components/Filter';
import * as actionCreators from './actions/offers';


class App extends Component{
  componentDidMount(){
    this.displayOffers("aha");
  }
  displayOffers = (offer) =>{
    const fetchOffers = bindActionCreators(
      actionCreators.fetchOffers, this.props.dispatch
    );
    fetch('http://localhost:3001/' + offer)
      .then((response)=>response.json())
      .then((response)=>{
        fetchOffers(response);
      })
      const displayOffers = bindActionCreators(
        actionCreators.displayOffers, this.props.dispatch
      )
      displayOffers();
  }

  priceToInt(price){
    return price ? parseInt(price.split('.').join("")) : null;
  }

  render(){

    if(this.props.filter === 'lowest'){
      this.props.offers.sort((a, b)=>{
        return(
          this.priceToInt(a.price) - this.priceToInt(b.price)
        )
      })
    }
    else if(this.props.filter === 'highest'){
      this.props.offers.sort((a, b)=>{
        return(
          this.priceToInt(b.price) - this.priceToInt(a.price)
        )
      })
    }
    const offers = this.props.offers.filter(offer=>{
      return offer.price != undefined;
    })
    return(
      <div className="app_wrapper">
        <div className="header">
          <h1>Tilboð dagsins</h1>
        </div>
        <div className="btn_nav">
          <button className="btn_nav__btn btn_aha" onClick={()=>this.displayOffers("aha")}>Aha</button>
          <button className="btn_nav__btn btn_hop" onClick={()=>this.displayOffers("hopkaup")}>Hópkaup</button>
        </div>
        <div>
          <Filter />
        </div>

          {this.props.displayOffers ? offers.map(offer=>{
            return <Offer offer = {offer} />
          }):null}


      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  // console.log(state)
  return{
    offers: state.offers,
    displayOffers: state.displayOffers,
    filter: state.filter

  }
}
export default connect (mapStateToProps)(App);

//
// {this.props.displayOffers ? offer === "aha" ?
//   this.props.offers.map(offer=>{
//     return <Offer offer = {offer} />
//   })
// }
