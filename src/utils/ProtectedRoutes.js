import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ component }) {
  const Component = component;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/");
     
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoutes;
