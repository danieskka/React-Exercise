import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import List from '../List';

const Main = () => {
  return <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/List" element={<List/>} />
          </Routes>

        </main>
};

export default Main;
