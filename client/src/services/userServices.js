import http from "../http-common/http-common";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:3002/api/test/";

const UserDataService = {
  getAll() {
    return http.get("/signup");
  },
  create(data) {
    return http.post("/auth/signup", data);
  },
  getPublicContent() {
    return http.get(API_URL + "all");
  },

  getUserBoard() {
    return http.get(API_URL + "user", { headers: authHeader() });
  },

  getModeratorBoard() {
    return http.get(API_URL + "mod", { headers: authHeader() });
  },

  getAdminBoard() {
    return http.get(API_URL + "admin", { headers: authHeader() });
  },
};

export default UserDataService;
