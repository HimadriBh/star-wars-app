import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import {BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import ContentRows from './ContentRows';
// import { connect } from 'react-redux'
// import { searchCategories } from './actions/searchbarActions'
import thunk from 'redux-thunk';
import { searchCategories } from './actions/searchbarActions';
const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch(searchCategories)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
        <Header />
        <div className="app-main-content">
          <SideBar />
          <ContentRows />
        </div>
      </div>
      </Router>
    </Provider>
  );
}



export default App;
