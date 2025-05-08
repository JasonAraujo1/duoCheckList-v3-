import Context from './context';
import { useState } from "react";

async function Provider({ children }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userId, setUserId] = useState([]);


    const data = await fetchApiUsers()
    const dataName = data.name;
    const dataPassword = data.password;
    const dataId = data.id;
    

    const contextValue = {
        name,
        password,
        userId
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Provider;