import http from "../http-common/http-common";

class FileUploadService {
  upload(file, userId, onUploadProgress) {
    console.log("inside file uoloadservise ", userId);
    let formData = new FormData();

    formData.append("file", file);

    return http.post(`/upload/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
  getFiles() {
    return http.get("/files");
  }
}

export default new FileUploadService();
