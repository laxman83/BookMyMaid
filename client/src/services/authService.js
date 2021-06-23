//import axios from "axios";
import http from "../http-common/http-common";

//const API_URL = "http://localhost:3001/api";
class AuthService {
  login(username, password) {
    return http
      .post("/auth/signin", {
        username,
        password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
      });
  }

  logOut() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
