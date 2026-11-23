import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import UpcomingIPO from "./pages/upcomingIpo";
import OpenIPO from "./pages/openIpo";
import ClosedIPO from "./pages/closedIpo";
import ListedIPO from "./pages/ListedIpo";
import IPODetails from "./pages/IpoDetails";
import GMP from "./pages/GMP";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/upcoming"
              element={<UpcomingIPO />}
            />

            <Route
              path="/open"
              element={<OpenIPO />}
            />

            <Route
              path="/closed"
              element={<ClosedIPO />}
            />

            <Route
              path="/listed"
              element={<ListedIPO />}
            />

            <Route
              path="/ipo/:id"
              element={<IPODetails />}
            />

            <Route
              path="/gmp"
              element={<GMP />}
            />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;