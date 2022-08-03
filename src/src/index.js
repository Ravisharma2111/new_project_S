import React from "react";
import ReactDOM from "react-dom/client";
import TransactionHistory from "./TransactionHistory"
import App from "./App";
import CompareWallets from "./CompareWallets";
import Stacking from "./Stacking"
import WalletAnalytics from "./WalletAnalytics"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./Login";
// import SignUp from "./SignUp";
import Procted from "./Procted";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
  <Route exact path='/login' element={<Login />} />
    <Route  path='/' element={<Procted Component={App} />} />
    <Route  path='/stacking' element={<Procted Component ={Stacking} />} />
    <Route  path='/transactionhistory' element={<Procted Component ={TransactionHistory} />} />
    <Route  path='/walletanalytics' element={<Procted Component ={WalletAnalytics} />} />
    <Route  path='/comparewallets' element={<Procted Component ={CompareWallets} />} />
  </Routes>
  </BrowserRouter>
);
