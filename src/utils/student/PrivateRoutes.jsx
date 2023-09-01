import React from "react"
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const studentData = useSelector(state => state.studentReducer);
  const token = studentData?.token;
  
  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  console.log('student private Route');

  return token ? <Outlet /> : null;
};

export default PrivateRoute;