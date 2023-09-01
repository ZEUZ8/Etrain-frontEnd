import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const principalData = useSelector(state => state.principalReducer);
  const token = principalData?.token;
  
  React.useEffect(() => {
    if (!token) {
      navigate("/principal/login");
    }
  }, [navigate, token]);

  console.log('principal Routes');

  return token ? <Outlet /> : null;
};

export default PrivateRoute;