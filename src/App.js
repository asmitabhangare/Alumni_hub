//blogpost
import React from 'react';
import './App.css';
import Header from './components/Header';
import Fullpost from './components/Posts/fullpost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from './components/CreatePost';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="bodyContainer">
          {/* <div className="sidebarContainer"><Sidebar></Sidebar></div> */}

          <div className="blogPostContainer">
            <Route path="/" exact component={Fullpost} />
            <Route path="/create-post" component={CreatePost} />
          </div>

          {/* <div className="sidebarContainer"><Sidebar></Sidebar></div> */}
        </div>


      </div>
    </Router>
  );
}

export default App;


