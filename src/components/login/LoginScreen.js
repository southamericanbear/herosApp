import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    const lasthPath = localStorage.getItem("lastpath") || "/";

    dispatch({
      type: types.login,
      payload: {
        name: "Alancito",
      },
    });
    history.replace(lasthPath);
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
