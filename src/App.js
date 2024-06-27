import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TicketScreen from "./pages/TicketScreen/TicketScreen";
import TravelPanel from "./pages/TravelPanel/TravelPanel";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import PurchaseResult from "./pages/PurchaseResult/PurchaseResult";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket" element={<TicketScreen />}>
          <Route path=":from/:to/:date" element={<TicketScreen />} />
        </Route>
        <Route path="/travelPanel" element={<TravelPanel />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/purchaseResult" element={<PurchaseResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;