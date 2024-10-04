import { useState } from "react";
import AppContext from "./AppContext";  // Corrected the import statement
import PropTypes from 'prop-types';  // Corrected 'propTypes' to 'PropTypes'
import { Util } from "../../Util/Util";



// This file (Provider) is the component that will provide the information

// This function wraps all child components that we want to have in a context
function Provider({children}) {

    const [pesquisaDados, setPesquisaDados] = useState('produto')
    const [abrirFrom, setAbrirForm] = useState(false)
    const [carrinho, setCarrinho] = useState(Util.LocalStage)
    const [pesquisaCatalogo, setPesquisaCatalogo] = useState('celular')
    const [ loginCadastro, setLoginCadastro] = useState(true)


    // These variables are passed to the Context
    const value = {
        pesquisaDados, 
        setPesquisaDados,
        abrirFrom, 
        setAbrirForm,
        carrinho, 
        setCarrinho,
        pesquisaCatalogo, 
        setPesquisaCatalogo,
        loginCadastro, 
        setLoginCadastro,
    };

    return ( 
        // All properties placed in AppContext.Provider can be accessed by all of its children
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

Provider.propTypes = {  // Corrected 'prototypes' to 'propTypes'
    children: PropTypes.any,
}.isRequired;

export default Provider;
