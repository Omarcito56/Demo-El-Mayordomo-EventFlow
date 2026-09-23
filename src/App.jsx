import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AnalyticsRouteTracker } from "./analytics/AnalyticsRouteTracker";


import { ScrollToTop } from "./components/common/ScrollToTop";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsRouteTracker />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
