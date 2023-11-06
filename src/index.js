import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Detail from './Detail'
import Sortdata from './Sortdata'
import Gardentip from './Gardentip';
import Search from './Search'
import Takecareplant from './Takecareplant'
import Plantseed from './Plantseed'
import Growmushroom from './Growmushroom'
import Contact from './Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Gardentips' element={<Gardentip />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Gardentips/Takecareplant' element={<Takecareplant />} />
        <Route path='/Gardentips/Plantseed' element={<Plantseed />} />
        <Route path='/Gardentips/Growmushroom' element={<Growmushroom />} />
        <Route path='/Product/detail/:id' element={<Detail />} />
        <Route path='/Product/:name' element={<Sortdata />} />
        <Route path='/Product/search/:name' element={<Search />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);