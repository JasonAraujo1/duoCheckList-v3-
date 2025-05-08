import { fetchApiUsers } from '../services/fetchApi';
import Context from './context';
import { useEffect, useState } from "react";

function Provider({ children }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userId, setUserId] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            const data = await fetchApiUsers();

           
            const user = data[0];

            if (user) {
                setName(user.name);
                setPassword(user.password);
                setUserId(user.id);
            }
        }

        fetchUserData();
    }, []);

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