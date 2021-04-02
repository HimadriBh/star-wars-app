const initState = {
  loading: true,
  query: "",
  categories: ['people', 'films', 'vehicles', 'planets', 'species', 'starships'],
  currentCategory: "",
  data: []
}
function reducer(state = initState, action ){
  switch(action.type){
    case 'UPDATE_QUERY':
      return {
        ...state,
        query: action.payload
      }
    case 'UPDATE_CURRENT_CATEGORY':
      return {
        ...state,
        currentCategory: action.payload
      }
    case 'CLEAR_QUERY':
      return {
        ...state,
        query: ""
      }
    case 'RESET_CURRENT_CATEGORY':
      return {
        ...state,
        query: "",
        currentCategory: "people"
      }
    case 'GET_CATEGORY_DATA':
      return {
        ...state,
        data: action.payload
      }
    case 'FETCHING_ERROR':
    default:
      return state
  }
}

export default reducer;