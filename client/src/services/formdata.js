import http from "../http-common/http-common";

const formDataService = {
  // upload(formData) {
  //   return http.post("/upload", formData);
  // },
  getUser(id) {
    return http.get(`/user?id=${id}`);
  },
  create(data) {
    return http.post("/createData", data);
  },
  getAll() {
    return http.get("/findData");
  },
  getListFiles() {
    return http.get("/files");
  },
};

export default formDataService;
