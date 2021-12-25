import React from 'react';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Projects from './components/Projects/Project/Projects'
import Article from './components/Projects/Project/Article/Article';



function App() {
 
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Switch>
          <Route path = '/' exact    component = {Home}/>
          <Route path = '/about'     component = {About}/>
          <Route path = '/projects'  component = {Projects}/>
          <Route path = '/article/:articleId'  component = {Article}/>
          
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
