import React, {Fragment} from 'react';
import './App.css';

import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Modal from './layout/Modal'
import FilterBar from './components/FilterBar'
import PortfolioMain from './components/PortfolioMain'
import Footer from './components/Footer'


const App = ()=>{
  return(
    <Fragment>
      <NavBar />
      <Hero />
      <Featured />
      <FilterBar />
      <PortfolioMain />
      <Footer />

      <Modal>
      </Modal>
    </Fragment>
  )
}
 

export default App;
