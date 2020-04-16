import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Spots from "./pages/Spots";

const App = () => {
  const pages = [
    { path: "/", label: "Accueil", component: Home },
    { path: "/spots", label: "Spots", component: Spots },
  ];

  const views = pages.map((page, index) => (
    <Route key={index} exact path={page.path} component={page.component} />
  ));

  return (
    <Router>
      <>
        <Header pages={pages} />
        <main>
          <Switch>{views}</Switch>
        </main>
      </>
    </Router>
  );
};

export default App;
