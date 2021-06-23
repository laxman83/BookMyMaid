import http from "../http-common/http-common";
const ContactUsService = {
  create(data) {
    return http.post("/contactus", data);
  },
};

export default ContactUsService;
