import { login, getLogin } from "../utils/auth";
import * as React from "react";
import Router from "next/router";
export default function Login() {
  React.useEffect(() => {
    if (getLogin().login) {
      console.log("go to home");
      Router.replace("/");
    }
  }, []);
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}
