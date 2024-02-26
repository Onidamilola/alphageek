import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Coming from "./pages/coming-soon";
// import Get-Pos from "./pages/get-pos";
// import ExchangeRate from "./pages/exchangeRate";
// import Messages from "./pages/messages";
// import Roles from "./pages/roles";
// import Settings from "./pages/settings";
// import Transactions from "./pages/transactions";
// import Users from "./pages/users";
// import CreateUsers from "./components/createUserModal";
// import RoleDetails from "./pages/roleDetails";
// import UserDetails from "./pages/usersDetails";
// import NotFound from "./component/notFound"; // Import the NotFound component

// Lazy load pages/components
const Home = lazy(() => import(".././src/pages/home/Home.jsx"));
const Login = lazy(() => import("./pages/login/Login.jsx"));
const Register = lazy(() => import("./pages/register.jsx"));
const Verify = lazy(() => import("./pages/verify.jsx"));
const OutletRecruitment = lazy(() => import("./pages/outlet-recruitment.jsx"));
const CompetitionTracking = lazy(() => import("./pages/competition-tracking.jsx"));
const OOFTracking = lazy(() => import("./pages/OOF-tracking.jsx"));
const PlanogramChecks = lazy(() => import("./pages/planogram-checks.jsx"));
const PricingChecks = lazy(() => import("./pages/pricing-checks.jsx"));
const ProductMerchandising = lazy(() => import("./pages/product-merchandising.jsx"));
const ProductOrdering = lazy(() => import("./pages/product-ordering.jsx"));
const ProductsFreshness = lazy(() => import("./pages/products-freshness.jsx"));
const POSM = lazy(() => import("./pages/POSM.jsx"));
const StoreDetailing = lazy(() => import("./pages/store-detailing.jsx"));
const RoutePlan = lazy(() => import("./pages/routeplan.jsx"));
const OutletList = lazy(() => import("./pages/outletlist.jsx"));
const VisitSchedule = lazy(() => import("./pages/visitschedule.jsx"));
const Inbox = lazy(() => import("./pages/inbox.jsx"));
const Help = lazy(() => import("./pages/help.jsx"));
const CreateOutlet = lazy(() => import("./pages/createoutlet.jsx"));
const CreateSchedule = lazy(() => import("./pages/createschedule.jsx"));


function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="container">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>

          {/* <Route path="/" element={<Home />}  /> */}
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Home />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
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
          {/* <Route path="/contact" element={<Contact />}  />
          

          {/* Catch-all route for 404 */}

          {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;