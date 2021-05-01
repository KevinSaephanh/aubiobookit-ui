import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";
import ProfileEdit from "./pages/profileEdit/ProfileEdit";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/profile/:id/edit" component={ProfileEdit} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;
