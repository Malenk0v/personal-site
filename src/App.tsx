import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import { routersHome } from './utils/constants';

function App() {
  return (
    <div className="App">
      <Routes>
        {routersHome.map((path) => (
          <Route path={path} element={<Home />} />
        ))}
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
