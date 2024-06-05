import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBeforeLoginPage from "./page/SearchBeforeLoginPage";
import SearchAfterLoginPage from "./page/SearchAfterLoginPage";
import AboutBeforeLoginPage from "./page/AboutBeforeLoginPage";
import AboutAfterLoginPage from "./page/AboutAfterLoginPage";
import ResultBeforeLogin from "./page/ResultBeforeLogin";
import ResultAfterLogin from "./page/ResultAfterlogin";
import CreateEvent from "./page/CreateEvent";
import CreateEventSuccess from "./page/CreateEventSuccess";
import ResultSeminar from "./page/ResultSeminar";
import Login from "./page/Login";
import Register from "./page/Register";
import Profile from "./page/Profile";
import TicketInfo from "./page/TicketInfo";
import ConfirmProggress from "./page/ConfirmProggress";
import ConfirmSuccess from "./page/ConfirmSuccess";
import PaymentConfirm from "./page/PaymentConfirm";
import PaymentSuccess from "./page/PaymentSuccess";
import OthersAfterLogin from "./page/OthersAfterLogin";
import CreateEventBaru from "./page/CreateEventBaru/CreateEvent";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 1 */}
        <Route path="/" element={<SearchBeforeLoginPage />} />
        <Route path="/CreateEventBaru" element={<CreateEventBaru />} />
        <Route path="/OthersAfterLogin" element={<OthersAfterLogin />} />

        {/* 2 */}
        <Route path="/afterLogin" element={<SearchAfterLoginPage />} />

        {/* 3 */}
        <Route path="/about" element={<AboutBeforeLoginPage />} />

        {/* 4 */}
        <Route path="/aboutAfterLogin" element={<AboutAfterLoginPage />} />

        {/* 5 */}
        <Route path="/result" element={<ResultBeforeLogin />} />

        {/* 6 */}
        <Route path="/resultAfterLogin" element={<ResultAfterLogin />} />

        {/* 7 */}
        <Route path="/create" element={<CreateEvent />} />

        {/* 8 */}
        <Route path="/createSuccess" element={<CreateEventSuccess />} />

        {/* 9 */}
        <Route path="/resultseminar" element={<ResultSeminar />} />

        {/* 10 */}
        <Route path="/Login" element={<Login />} />

        {/* 11 */}
        <Route path="/register" element={<Register />} />

        {/* 12 */}
        <Route path="/profile" element={<Profile />} />

        {/* 13 */}
        <Route path="/ticketinfo" element={<TicketInfo />} />

        {/* 14 */}
        <Route path="/confirmprogress" element={<ConfirmProggress />} />

        {/* 15 */}
        <Route path="/confirmsuccess" element={<ConfirmSuccess />} />

        {/* 15 */}
        <Route path="/paymentconfirm" element={<PaymentConfirm />} />

        {/* 15 */}
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
