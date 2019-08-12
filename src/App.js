import React from "react";
import Header from "./components/shared/header";
import WordPress from "./components/wordpress";
import WordPressStepTwo from "./components/wordpress/stepTwo";
import Home from "./components/home";
import Blog from "./components/blog";
import BlogDetail from "./components/blog/blogDetails";
import About from "./components/about";
import Contact from "./components/contact";
import { Route } from "react-router-dom";
import { GlobalStyles } from "./components/theme";

// The core of the application. All the Routable components should be added inside the App() with exact paths
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Route exact path={"/"} component={WordPress} />
      <Route exact path={"/step-two"} component={WordPressStepTwo} />
      {/*<Route exact path={"/"} component={WordPressStepTwo} />*/}
      <Route exact path={"/Home"} component={Home} />
      <Route exact path={"/About"} component={About} />
      <Route exact path={"/Blog"} component={Blog} />
      <Route exact path={"/blog/:slug"} component={BlogDetail} />
      <Route exact path={"/Contact"} component={Contact} />

      {/*<Route exact path={"/"} component={Blog} />*/}
    </div>
  );
}

export default App;
