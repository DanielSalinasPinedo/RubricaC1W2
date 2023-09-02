import { createContext, useState } from "react";

export const Contexto = createContext()

export const Datos=({children})=>{
    const [lista, setLista] = useState([])

    return(
        <Contexto.Provider value={{lista, setLista}}>
            {children}
        </Contexto.Provider>
    )
}