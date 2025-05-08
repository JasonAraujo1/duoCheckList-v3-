// context/Provider.jsx
import React, { useEffect, useState } from "react";
import { fetchApiUsers } from "../services/fetchApi";
import Context from "./context";

function Provider({ children }) {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      const storedId = localStorage.getItem("idUser");
      if (!storedId) return;

      const data = await fetchApiUsers();
      const user = data.find((user) => user.id === storedId);

      if (user) {
        setName(user.name);
        setPassword(user.password);
        setUserId(user.id);
      }
    }

    fetchUserData();
  }, []);

  const contextValue = {
    userId,
    setUserId,
    name,
    setName,
    password,
    setPassword,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
