// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React from 'react';
// // import Routes  from 'react-router-dom';
// // import CssBaseline from '@mui/material/CssBaseline';
// import LoginPage from './components/LoginPage';
// import HomePage from './components/HomePage';
// import OutletRecruitment from './components/outlet-recruitment';
// import CompetitionTracking from './components/competition-tracking';
// import OOFTracking from './components/OOF-tracking';
// import PlanogramChecks from './components/planogram-checks';
// import POSM from './components/POSM'
// import StoreDetailing from './components/store-detailing'
// import PricingChecks from './components/pricing-checks'
// import ProductFreshness from './components/products-freshness'
// import ProductMerchandising from './components/product-merchandising'
// import ProductOrdering from './components/product-ordering'

// const App = () => {
//   return (
//       <Router>
//       <Routes>
//         <Route index element={<LoginPage />} />
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/homepage" element={<HomePage />} />
//         <Route path="/outlet-recruitment" element={<OutletRecruitment />} />
//         <Route path="/competition-tracking" element={<CompetitionTracking />} />
//         <Route path="/OOF-tracking" element={<OOFTracking />} />
//         <Route path="/planogram-checks" element={<PlanogramChecks />} />
//         <Route path="/pricing-checks" element={<PricingChecks />} />
//         <Route path="/Product-merchandising" element={<ProductMerchandising />} />
//         <Route path="/Product-ordering" element={<ProductOrdering />} />
//         <Route path="/Product-freshness" element={<ProductFreshness />} />
//         <Route path="/store-detailing" element={<StoreDetailing />} />
//         <Route path="/POSM" element={<POSM />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import OutletRecruitment from './components/outlet-recruitment';
import CompetitionTracking from './components/competition-tracking';
import OOFTracking from './components/OOF-tracking';
import PlanogramChecks from './components/planogram-checks';
import POSM from './components/POSM';
import StoreDetailing from './components/store-detailing';
import PricingChecks from './components/pricing-checks';
import ProductFreshness from './components/products-freshness';
import ProductMerchandising from './components/product-merchandising';
import ProductOrdering from './components/product-ordering';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/outlet-recruitment" element={<OutletRecruitment />} />
        <Route path="/competition-tracking" element={<CompetitionTracking />} />
        <Route path="/OOF-tracking" element={<OOFTracking />} />
        <Route path="/planogram-checks" element={<PlanogramChecks />} />
        <Route path="/pricing-checks" element={<PricingChecks />} />
        <Route path="/Product-merchandising" element={<ProductMerchandising />} />
        <Route path="/Product-ordering" element={<ProductOrdering />} />
        <Route path="/Product-freshness" element={<ProductFreshness />} />
        <Route path="/store-detailing" element={<StoreDetailing />} />
        <Route path="/POSM" element={<POSM />} />
      </Routes>
    </Router>
  );
};

export default App;