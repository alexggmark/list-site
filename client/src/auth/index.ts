import Cookies from "js-cookie";

export const setUserAuth = (token: string) => {
  Cookies.set("authToken", token, { expires: 7 });
}

export const getUserAuth = (): string => {
  const cookieValue = Cookies.get("authToken") || "";
  return cookieValue;
}