import Template from "./components/template/Template";
import ProductDetail from "./components/products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import ProductList from "./components/products/ProductList";

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/products/:slug">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
