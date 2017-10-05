import * as actiontypes from '../actiontypes/offers';

const initReducer = {
  offers: [],
  displayOffers: true,
  filter: ""
}

export default function offers(state=initReducer, action){
  switch(action.type){
    case actiontypes.FETCH_OFFERS:
      return {...state, offers: action.offers};
    case actiontypes.DISPLAY_OFFERS:
      return {...state, displayOffers: true}
    case actiontypes.FILTER_OFFERS:
      return {...state, filter: action.filter}
    default: return state;
  }
}
