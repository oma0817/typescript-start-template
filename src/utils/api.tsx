import Axios from "axios";
import auth from "./auth";

export const endpoint = "https://api.engchat.fifteenh.io/api";

export const api = Axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: `Bearer ${auth.getToken()}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !error.config._retry
    ) {
      try {
        if (auth.getRefreshToken() !== "undefined") {
          const {
            data: {
              data: { access_token, refresh_token },
            },
          } = await api.post("/refresh/token", {
            refresh_token: auth.getRefreshToken(),
          });
          auth.setToken(access_token);
          auth.setRefreshToken(refresh_token);
          api.defaults.headers.common["Authorization"] = access_token;
          return api.request(error.config);
        } else {
          return null;
        }
      } catch (err) {
        return null;
      }
    }
    return Promise.reject(error);
  }
);
