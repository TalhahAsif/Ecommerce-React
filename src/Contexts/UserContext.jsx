import { createContext, useState } from "react";

const userContext = createContext();

let UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </div>
  );
};

export { userContext, UserContextProvider };
