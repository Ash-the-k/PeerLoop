import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header"; // Ensure this import is correct

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Header />} // Use element prop to render Header component
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
