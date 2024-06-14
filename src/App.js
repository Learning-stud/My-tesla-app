import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModelS from "./Main/ModelS";
import ModelQ from "./Main/ModelQ";
import ModelX from "./Main/ModelX";
import ModelY from "./Main/ModelY";
import SolarPanel from "./Main/SolarPanel";
import SolarRoof from "./Main/SolarRoof";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";
import Header from "./Components/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/Header" element={<Header />} />
        <Route
          path="/ModelS"
          element={
            <>
              <ModelS />
              <Home2 />
            </>
          }
        />
        <Route
          path="/ModelQ"
          element={
            <>
              <ModelQ />
              <Header />
            </>
          }
        />
        <Route
          path="/ModelX"
          element={
            <>
              <ModelX />
            </>
          }
        />
        <Route
          path="/ModelY"
          element={
            <>
              <ModelY />
            </>
          }
        />
        <Route
          path="/SolarPanel"
          element={
            <>
              <SolarPanel />
            </>
          }
        />
        <Route
          path="/SolarRoof"
          element={
            <>
              <SolarRoof />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
