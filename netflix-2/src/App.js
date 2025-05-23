import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import { action, comedy, originals} from './urls'

import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Original'/>
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />
      
      
      
    </div>
  );
}

export default App;
