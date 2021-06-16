import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import Listings from "./pages/Listings.js";
import CreateListing from "./pages/CreateListing.js";
import Login from "./pages/Login.js";
import Help from "./pages/Help.js"
import Signup from "./pages/Signup.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/listings">
          <Listings />
        </Route>
        <Route path="/create-listing">
          <CreateListing />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
