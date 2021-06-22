import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Listings from "./pages/Listings";
import CreateListing from "./pages/CreateListing";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

const App = () => {
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
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
