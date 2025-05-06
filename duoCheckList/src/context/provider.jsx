import Context from './context';
import { useState } from "react";

function Provider({ children }) {
    const [valorGlobal, setValorGlobal] = useState("tipo de dado que você quiser");



    const contextValue = {
      valorGlobal,
      setValorGlobal
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Provider;