import "./App.css";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Component/Auth";
import Dashboard from "./Component/Dashboard";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const user1 = localStorage.getItem("login");
    user1 ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("login", user);
  }, [user]);

  return (
    <div className="App">
      <Routes>
        {!user && (
          <Route path="/auth" element={<Auth auth={() => setUser(true)} />} />
        )}
        {user &&
          (<Route
            path="/dashboard"
            element={<Dashboard logoutx={() => setUser(false)} />}
          />)}

        <Route
          path="*"
          element={<Navigate to={user ? "dashboard" : "auth"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
