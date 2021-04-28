import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './containers/Body';
import Mainpost from './components/Posts/mainpost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="bodyContainer">
          <div className="sidebarContainer"><Sidebar></Sidebar></div>

          <div className="blogPostContainer">
            <Route path="/" exact component={Mainpost} />
            <Route path="/create-post" component={CreatePost} />
          </div>

          <div className="sidebarContainer"><Sidebar></Sidebar></div>
        </div>


      </div>
    </Router>
  );
}

export default App;
