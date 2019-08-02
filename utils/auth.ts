export type AuthInfo = { login: boolean };
export function getLogin(): AuthInfo {
  let authToken = { login: false };
  try {
    authToken =
      (JSON.parse(
        window.localStorage.getItem("auth-token") || ""
      ) as AuthInfo) || authToken;
  } catch (error) {
    console.log("failed to parse auth-token");
  }
  return authToken;
}

export function login() {
  console.log("login");
  const authToken = getLogin();

  if (authToken.login) {
    window.location.replace("/");
  } else {
    window.localStorage.setItem("auth-token", JSON.stringify({ login: true }));
    window.location.replace("/");
  }
}
