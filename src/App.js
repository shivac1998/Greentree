import { Route, Switch } from "react-router-dom";
import Amenities from "./pages/Amenities";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/Amenities">
          <Amenities />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
