import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../screens/HomePage";
import FormPage from "../screens/FormPage";

const Root = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <main className="main">
            <Suspense fallback="">
              <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/addVoteForm" render={() => <FormPage />} />
              </Switch>
            </Suspense>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Root;
