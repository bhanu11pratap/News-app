import React from "react";
import Bar from "./components/Bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ApiCall from "./components/ApiCall";
import NotFound from "./components/NotFound";
export default function App() {
  return (
    <>
      <Router>
        <Bar />
        <Routes>
          <Route exact path="/" element={<ApiCall title="TOP HEADLINES" />} />
          <Route
            path="/business"
            element={<ApiCall category="business" title="BUSINESS" />}
          />
          <Route
            path="/entertainment"
            element={<ApiCall category="entertainment" title="ENTERTAINMENT" />}
          />
          <Route
            path="/health"
            element={<ApiCall category="health" title="HEALTH" />}
          />

          <Route
            path="/science"
            element={<ApiCall category="science" title="SCIENCE" />}
          />
          <Route
            path="/sports"
            element={<ApiCall category="sports" title="SPORTS" />}
          />
          <Route
            path="/technology"
            element={<ApiCall category="technology" title="TECHNOLOGY" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
