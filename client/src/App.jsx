import React from 'react';
import Main from './components/Main';

const App = () => (
  <div>
    <div className="topbar"></div>
    <div className="garment_carousel">Garment Carousel</div>
    <div className="upload_title">
        <h1 className="upload_an_item">Upload an item!</h1>
        <Main />
    </div>
  </div>
  
);

export default App;