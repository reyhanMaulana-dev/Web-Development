import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.jsx";
import SurveyPage from "./Page/SurveyPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:id" element={<SurveyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
