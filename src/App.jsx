// App.js
import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import InvestmentDetailPage from './components/InvDetail';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" exact element={<Dashboard/>}/>
    <Route path="/investment/:id"  element={<InvestmentDetailPage/>}/>
    <Route path="/Login"  element={<LoginPage/>}/>


    </Routes>
</Router>
  );
}

export default App;
