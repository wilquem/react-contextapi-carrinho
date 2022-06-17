import Login from "pages/Login/index";
import Feira from "pages/Feira/index";
import Carrinho from "pages/Carrinho/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CarrinhProvider>
            <PagamentoProvider>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </PagamentoProvider>
          </CarrinhProvider>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter>
  );
}
