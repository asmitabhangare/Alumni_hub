import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './containers/Body';
import Mainpost from './components/Posts/mainpost';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Body></Body> */}
      <Mainpost/>
    </div>
  );
}

export default App;
