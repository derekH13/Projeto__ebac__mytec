import { BrowserRouter, Route, Routes as Switch, Navigate} from "react-router-dom"
import { Admin, Cadastro, CadastroEndereço, Dashboard, Produtos } from "../pages";



//config do react route dom padrão

export const Routes = () => {

    return (

            <BrowserRouter>
            <Switch>

                {/* quando o navegador for pra rota '/pagina-inicial' vai para a pagina "Dashboard"  */}
                <Route path="/pagina-inicial" element={<Dashboard />} /> 

                <Route path="/pagina-Produtos" element={<Produtos />} /> 

                <Route path="/pagina-Admin" element={<Admin />} /> 

                <Route path="/pagina-Cadastro" element={<Cadastro />} />

                <Route path="/pagina-Cadastro-Endereço" element={<CadastroEndereço />} />


            {/* se a url não se encaixar com nenhuma a cima */}
            <Route path="*" element={<Navigate to="pagina-inicial" />}/>

            </Switch>
            </BrowserRouter>

    );
}