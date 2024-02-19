import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage/search-page';
import HomePage from './HomePage/home-page';
import Header from './Header/header';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
      <Toaster/>
    </div>
  );
}

export default App;
