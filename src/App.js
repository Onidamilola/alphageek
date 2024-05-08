import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Product from './components/product.jsx';
import Unique from './pages/unique.jsx';
import Personal from './pages/personal.jsx';
import Guarantor from './pages/guarantor.jsx';
import Bank from './pages/bank.jsx';
import Capture from './pages/capture.jsx';
import Register from './pages/register.jsx';
import Tabs from './pages/tabs.jsx';
import Verify from './pages/verify.jsx';
import Page1 from './pages/forgot_password/page1.jsx';
import Page2 from './pages/forgot_password/page2.jsx';
import OutletRecruitment from './pages/outlet-recruitment.jsx';
import CompetitionTracking from './pages/competition-tracking.jsx';
import OOFTracking from './pages/OOF-tracking.jsx';
import PlanogramChecks from './pages/planogram-checks.jsx';
import PricingChecks from './pages/pricing-checks.jsx';
import ProductMerchandising from './pages/product-merchandising.jsx';
import ProductOrdering from './pages/product-ordering.jsx';
import ProductsFreshness from './pages/products-freshness.jsx';
import POSM from './pages/POSM.jsx';
import StoreDetailing from './pages/store-detailing.jsx';
import RoutePlan from './pages/routeplan.jsx';
import OutletList from './pages/outletlist.jsx';
import VisitSchedule from './pages/visitschedule.jsx';
import Inbox from './pages/inbox.jsx';
import Help from './pages/help.jsx';
import CreateOutlet from './pages/createoutlet.jsx';
import UpdateOutlet from './pages/updateoutlet.jsx';
import CreateSchedule from './pages/createschedule.jsx';
import StoreVisit from './components/storevisit.jsx';
import ProductMech from './components/productmerc.jsx';



function App() {
  return (
    <Router>
      
        <Routes>

          {/* <Route path="/" element={<Home />}  /> */}
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Home />} /> 
          <Route path="/unique" element={< Unique />} /> 
          <Route path="/personal" element={<Personal />} /> 
          <Route path="/guarantor" element={<Guarantor />} /> 
          <Route path="/bank" element={<Bank />} /> 
          <Route path="/capture" element={<Capture />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
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
        <Route path="/updateoutlet" element={<UpdateOutlet/>} />
        <Route path="/createschedule" element={<CreateSchedule/>} />
        <Route path="/storevisit" element={<StoreVisit/>} />
        <Route path="/productmech" element={<ProductMech/>} />
        <Route path="/product" element={<Product/>} />
          {/* <Route path="/contact" element={<Contact />}  />
          

          {/* Catch-all route for 404 */}

          {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>
    </Router>
  );
}

export default App;