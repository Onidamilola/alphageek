

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/welcome';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import OutletRecruitment from './components/outlet-recruitment';
import CompetitionTracking from './components/competition-tracking';
import OOFTracking from './components/OOF-tracking';
import PlanogramChecks from './components/planogram-checks';
import POSM from './components/POSM';
import StoreDetailing from './components/store-detailing';
import PricingChecks from './components/pricing-checks';
import ProductsFreshness from './components/products-freshness';
import ProductMerchandising from './components/product-merchandising';
import ProductOrdering from './components/product-ordering';
import RoutePlan from './components/routeplan';
import OutletList from './components/outletlist';
import VisitSchedule from './components/visitschedule';
import Inbox from './components/inbox';
import Help from './components/help';
import CreateOutlet from './components/createoutlet';
import CreateSchedule from './components/createschedule';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/outlet-recruitment" element={<OutletRecruitment />} />
        <Route path="/competition-tracking" element={<CompetitionTracking />} />
        <Route path="/OOF-tracking" element={<OOFTracking />} />
        <Route path="/planogram-checks" element={<PlanogramChecks />} />
        <Route path="/pricing-checks" element={<PricingChecks />} />
        <Route path="/Product-merchandising" element={<ProductMerchandising />} />
        <Route path="/Product-ordering" element={<ProductOrdering />} />
        <Route path="/Products-freshness" element={<ProductsFreshness />} />
        <Route path="/Posm" element={<POSM />} />
        <Route path="/store-detailing" element={<StoreDetailing />} />
        <Route path="/route-plan" element={<RoutePlan />} />
        <Route path="/outlet-list" element={<OutletList />} />
        <Route path="/visit-schedule" element={<VisitSchedule />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/help" element={<Help />} />
        <Route path="/createoutlet" element={<CreateOutlet/>} />
        <Route path="/createschedule" element={<CreateSchedule/>} />
      </Routes>
    </Router>
  );
};

export default App;