// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const Page1 = () => (
  <div>
    <h2>For Those Who are Down Bad</h2>
    <p>Do you eat your girl's coochie?</p>
    <button>Yes</button>
    <button>No</button>
  </div>
);

const Page2 = () => (
  <div>
    <h2>Page 2</h2>
    <div>This is Page 2 content</div>
  </div>
);

const App = () => {
  const secondDivStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    marginTop: '20px',
  };

  const bannerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    background: '#3498db',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <Router>
      <div className="App">
        <div style={bannerStyle}>
              <Link to="/page1">Page 1</Link>
              <Link to="/page2">Page 2</Link>
        </div>
        <div style={secondDivStyle}>
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
