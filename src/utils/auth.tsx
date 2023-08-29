const { parse } = JSON;

const auth = {
  clear(key: string) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }
    return null;
  },
  clearAppStorage() {
    return localStorage.clear();
  },
  get(key: string) {
    //@ts-ignore
    return parse(localStorage.getItem(key));
  },
  setToken(token: string) {
    return localStorage.setItem("token", token);
  },
  getToken() {
    return localStorage.getItem("token");
  },
  setRefreshToken(token: string) {
    return localStorage.setItem("refreshToken", token);
  },
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  },
  setChangePassword(pw: string) {
    return localStorage.setItem("changePassword", pw);
  },
  getChangePassword() {
    return localStorage.getItem("changePassword");
  },
};
export default auth;
