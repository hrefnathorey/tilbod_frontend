import * as actiontypes from '../actiontypes/offers';

export const fetchOffers = (offers)=>{
  return{
    type: actiontypes.FETCH_OFFERS,
    offers: offers
  }
}
export const displayOffers = ()=>{
  return{
    type: actiontypes.DISPLAY_OFFERS
  }
}
export const filterOffers = (filter)=>{
  return{
    type: actiontypes.FILTER_OFFERS,
    filter: filter
  }
}
