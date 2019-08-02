import * as React from "react";
import Router from "next/router";
import Link from "next/link";
import { getLogin } from "../utils/auth";
export default function List() {
  React.useEffect(() => {
    if (!getLogin().login) {
      Router.replace("/login");
    }
  }, []);
  return (
    <div>
      <div>
        <Link href="/">
          <span>home</span>
        </Link>
      </div>
      List
    </div>
  );
}
