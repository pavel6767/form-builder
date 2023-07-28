import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Main from './views/Main';
import Build from './views/Build';
import Preview from './views/Preview';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>
          Form Builder
        </h1>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/build">Build</Link>
          </li>
          <li>
            <Link to="/preview">Preview</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="build" element={<Build />} />
          <Route path="preview" element={<Preview />} />
        </Routes>
        {/* <RouterProvider router={router} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
