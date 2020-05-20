import React, {Fragment} from 'react';
import './App.css';


import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Modal from './layout/Modal'
import FilterBar from './components/FilterBar'
import PortfolioMain from './components/PortfolioMain'
import Pagination from './components/Pagination'
import Footer from './components/Footer'


import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers'
import {Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

let initialState = {}
const middleware = [thunk]
const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

const App = ()=>{
 


  return(

<Provider store ={store}>
    <Fragment>
      <NavBar />
      <Hero />
      <Featured />
      <FilterBar />
      <Pagination />
      <PortfolioMain  />
      <Pagination />
      <Footer />

      <Modal />
    </Fragment>
  </Provider>     

  )
}
 

export default App;
