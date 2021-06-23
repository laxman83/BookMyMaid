import http from "../http-common/http-common";

const feedbackService = {
  create(data) {
    return http.post("/feedback", data);
  },
};

export default feedbackService;
