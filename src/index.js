import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditBasicInformation from './components/pages/EditBasicInformation'
import EditLinksSocialNetworks from './components/pages/EditLinksSocialNetworks'
import EditPassword from './components/pages/EditPassword'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EditBasicInformation />} />
        <Route path='/edit/basic-information' element={<EditBasicInformation />} />
        <Route path='/edit/links-and-social-networks' element={<EditLinksSocialNetworks />} />
        <Route path='/edit/change-password' element={<EditPassword />} />
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);
