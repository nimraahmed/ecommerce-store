import { Route } from "react-router";
import "./App.css";
import SignUp from "./components/signup";
import Home from "./components/home";
import SignIn from "./components/signin";
import Categories from "./components/categories";
import SignInAdmin from "./components/adminPages/adminLogin";
import AdminPanel from "./components/adminPages/adminPanel";
import Hello from "./components/hello";
import PermanentDrawerLeft from "./components/categoriesSideBar";
import PageNotFound from "./components/404page";
import { Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/categories/all" component={Categories} />
        <Route exact path="/admin" component={SignInAdmin} />
        <Route exact path="/adminPanel" component={AdminPanel} />
        <Route exact path="/products" component={Hello} />
        <Route exact path="/testing" component={PermanentDrawerLeft} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

//https://medium.com/zero-equals-false/how-to-connect-a-react-frontend-with-node-js-bccb1fb7e2bb
