// import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Shared/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import TravelPackageDetails from "./pages/Home/TravelPackageDetails/TravelPackageDetails";
import AllPackages from "./pages/AllPackages/AllPackages";
import ContextProvider from "./contexts/ContextProvider";
import CheckOut from "./pages/CheckOut/CheckOut";
import Orders from "./pages/Orders/Orders";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login";
import AddPackage from "./pages/AddPackage/AddPackage";
import Booking from "./pages/Booking/Booking";
import Footer from "./pages/Shared/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/packages">
              <AllPackages></AllPackages>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/package/:packageId">
              <TravelPackageDetails></TravelPackageDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer>s</Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
