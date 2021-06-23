import http from "../http-common/http-common";

const maidBookService = {
  maidBook(data) {
    return http.post("/maidBook", data);
  },
};

export default maidBookService;
