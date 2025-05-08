import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import layout
import DefaultLayout from "./layouts/DefaultLayout";

// import pages
import SelectSkip from "./pages/SelectSkip";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<SelectSkip />} />
        </Route>
      </Routes>
    </Router>
  );
}
