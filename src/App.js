import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 匯入 components
import Index from "./components/Index";
import Event from "./components/Event"
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// reset CSS
import './style/reset.css'
import './style/font.css'

function App() {
  return (
    <Router>
      <>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    </Router>
  );
}

export default App;
