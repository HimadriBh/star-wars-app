import axios from '../axios'

export const searchCategories =  (category) => {
    if(category === ""){
      category = "people"
    }
  return async function(disptach){
    const data = await axios.get(category)
    disptach({
      type: 'GET_CATEGORY_DATA',
      payload: data.data.results

    })

  }

}

export const updateQueryStr = (queryValue) => {
  return {
    type: 'UPDATE_QUERY',
    payload: queryValue
  }
}

export const updateCategory = (value) => {
  return {
    type: 'UPDATE_CURRENT_CATEGORY',
    payload: value
  }
}

export const clearQueryStr = () => {
  return {
    type: 'CLEAR_QUERY',
  }
}

