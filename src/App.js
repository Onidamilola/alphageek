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
// const Contact = lazy(() => import("./pages/contact"));
// const Agent = lazy(() => import("./pages/agent"));
// const FAQ = lazy(() => import("./pages/faq"));
// const Get = lazy(() => import("./pages/get-started"));
// const POS = lazy(() => import("./pages/get-pos"));
// const Coming = lazy(() => import("./pages/coming-soon"));

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
          {/* <Route path="/contact" element={<Contact />}  />
          <Route path="/agent" element={<Agent />}  />
          <Route path="/faq" element={<FAQ />}  />
          <Route path="/get-started" element={<Get />}  />
          <Route path="/get-pos" element={<POS />}  />
          <Route path="/coming-soon" element={<Coming />}  />
          <Route path="/" element={<Home />}  /> */}

          {/* Catch-all route for 404 */}

          {/* <Route element={<NotFound />} path="*" /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;