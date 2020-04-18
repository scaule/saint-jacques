import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import routes from "./settings/routes";

const App = () => {
  const pages = Object.keys(routes).map((key, index) => (
    <Route
      key={index}
      exact
      path={`${process.env.PUBLIC_URL}${routes[key].path}`}
      component={routes[key].component}
    />
  ));

  return (
    <Router>
      <>
        <Header pages={routes} />
        <main>
          <Switch>{pages}</Switch>
        </main>
      </>
    </Router>
  );
};

export default App;
