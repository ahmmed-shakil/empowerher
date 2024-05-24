import React, { useState } from "react";
import ClientApp from "./Client/ClientApp";
import Admin from "./Admin";

const Redirect = () => {
  const [user, setUser] = useState(null);
  return <div>{user ? <ClientApp /> : <Admin />}</div>;
};

export default Redirect;
