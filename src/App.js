import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  Navbar, Nav, MenuItem, Brand, Header, Grid, Row, Col } from 'react-bootstrap';
import Offer from './components/Offer';
import Filter from './components/Filter';
import Search from './components/Search';
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
  };


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



    // else if(this.props.search){
    //   this.props.offers.filter((offer)=>{
    //     return b nameToLower().indexOf(b.toLowerCase())
    //   })
    // }

    let offers = this.props.offers.filter(offer=>{
      return offer.price != undefined;
    })

    if(this.props.search){
      offers = this.props.offers.filter(offer=>
        offer.title.toLowerCase().indexOf(this.props.search.toLowerCase()) > -1
      )
    }

    return(
      <div className="app_wrapper">
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Tilboð dagsins</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <MenuItem onClick={()=>this.displayOffers("aha")}>Aha</MenuItem>
          <MenuItem onClick={()=>this.displayOffers("hopkaup")}>Hópkaup</MenuItem>
        </Nav>
        </Navbar>

        <Grid>
        <div className="container_filters">
          <Filter />
          <Search />
        </div>
          <Row className="show-grid">
          {this.props.displayOffers ? offers.map(offer=>{
            return(
              <Col xs={12} md={6}>
                <Offer offer = {offer} />
              </Col>
            )
          }):null}
          </Row>
        </Grid>

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  // console.log(state)
  return{
    offers: state.offers,
    displayOffers: state.displayOffers,
    filter: state.filter,
    search: state.search

  }
}
export default connect (mapStateToProps)(App);

//
// {this.props.displayOffers ? offer === "aha" ?
//   this.props.offers.map(offer=>{
//     return <Offer offer = {offer} />
//   })
// }
