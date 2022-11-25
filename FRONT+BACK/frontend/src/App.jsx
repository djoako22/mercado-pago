import Checkout from './pages/checkout';
import Success from './pages/success';
import Failure from './pages/failure';
import Pending from './pages/pending';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
