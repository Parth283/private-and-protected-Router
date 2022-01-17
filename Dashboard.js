import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ logoutx }) => {
  
  const navigate = useNavigate();
  function logout() {
    logoutx();
    // console.log(logoutx,"logoutx");

    navigate("auth");
  }
  return (
    <div>
      DashBoard Page
      <br />
      <button onClick={logout}> LogOut</button>
    </div>
  );
};

export default Dashboard;
