import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { clearQueryStr, searchCategories } from './actions/searchbarActions'
import { useLocation } from 'react-router-dom';
import { updateCategory, updateQueryStr } from './actions/searchbarActions'
import './ContentRows.css'
import Item from './Item'


function ContentRows(props) {
  const location = useLocation()
  console.log(props.data)
  useEffect(() => {
    if(location.pathname.split('/')[1]){
      props.clearSearch()
      const index = props.categories.findIndex(element => element.includes(location.pathname.split('/')[1]))
      props.updateCategory(props.categories[index])
    }
    props.searchCategories(props.searchedCategory)
    return () => {
      // cleanup
    }
  }, [props, location])
  return (
    <div className="content-rows">
      {props.data ? props.data.map(item => (
        // <h1>{JSON.stringify(item)}</h1>
        <Item item={item}  />
      )) : <h3>Search...</h3>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    queryStr: state.query,
    categories: state.categories,
    searchedCategory: state.currentCategory,
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchCategories : (inputValue) => { dispatch(searchCategories(inputValue))},
  updateSearch : (inputValue) => {
    dispatch(updateQueryStr(inputValue))

  },
  updateCategory: (value) => {
    dispatch(updateCategory(value))
  },
  clearSearch: () => {
    dispatch(clearQueryStr())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentRows)
