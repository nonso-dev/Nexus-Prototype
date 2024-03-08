import { Children, createContext, useState } from "react";

export const NexusContext = createContext("")



const NexusContextProvider  = ({children}) => {

    const [token, setToken] = useState("");
    return <NexusContext.Provider value={{token , setToken}}>
        {
            children
        }
    </NexusContext.Provider>
}



export default NexusContextProvider;