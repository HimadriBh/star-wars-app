import React from 'react'
import './Header.css'
import { connect } from 'react-redux'
import { updateCategory, updateQueryStr } from './actions/searchbarActions'

function Header(props) {

  const handleChange = (e) => {
    props.updateSearch(e.target.value)
    const index = props.categories.findIndex(element => element.includes(props.queryStr))
    props.updateCategory(props.categories[index])

  }

  return (
    <div className="header">
      <div className="header__logo">
        <img src="https://pyxis.nymag.com/v1/imgs/314/20c/5e25fc541fc4e0b84bc393e1e316f07b40-18-Star-Wars-Logo.2x.h473.w710.jpg" alt="star wars logo"/>
      </div>
      <div className="header__searchBar">
        <input value={props.queryStr}  placeholder="Search all categories..." onChange={handleChange}  />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    queryStr: state.query,
    categories: state.categories,
    currentCategory: state.currentCategory,
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateSearch : (inputValue) => {
    dispatch(updateQueryStr(inputValue))

  },
  updateCategory: (value) => {
    dispatch(updateCategory(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
