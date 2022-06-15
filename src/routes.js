import Login from "pages/Login/index";
import Feira from "pages/Feira/index";
import Carrinho from "pages/Carrinho/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhProvider } from "common/context/Carrinho";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
            <CarrinhProvider>
              <Route path="/feira">
                <Feira />
              </Route>
            </CarrinhProvider>
        </UsuarioProvider>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
