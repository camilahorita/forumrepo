import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import CreatePost from './components/createPost/CreatePost';
import AllPosts from './components/allposts/AllPosts';

class App extends Component{

  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
          <Route exact path='/' element={<CreatePost/>}></Route>
          <Route exact path='/allposts' element={<AllPosts/>}></Route>
          </Routes>
        </div>
        
      </Router>
    )
  }
}

export default App;
