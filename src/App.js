import React from 'react';
import SearchForm from './components/home/SearchForm';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/NavBar';
import { Landing } from './components/home/Landing';
import { HashRouter as Router, Route } from 'react-router-dom'
import  Movie  from './components/home/Movie';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route exact path='/movie/:id' component={Movie} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
