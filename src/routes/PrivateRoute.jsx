import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return <div></div>;
};

export default PrivateRoute;

/*
*Steps -------------------------
1. Check User logged In or not?
2. If user is logged in allow them to visit the route
3. Else redirect user to the logged in page
4. 

 */
