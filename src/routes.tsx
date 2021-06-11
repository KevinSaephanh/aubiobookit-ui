import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Profile} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
