import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./admin/page/login";
import Dashboard from "./admin/page/dashboard";
import Event from "./admin/page/event";
import DetailEvent from "./admin/page/detail-event";
import Participant from "./admin/page/participant";
import Voucher from "./admin/page/voucher";
import Cash from "./admin/page/cash";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="KarcisKita">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event" element={<Event />} />
          <Route path="/detail-event" element={<DetailEvent />} />
          <Route path="/participant" element={<Participant />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/cash" element={<Cash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
