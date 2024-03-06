import http from "../http-common";

class TodoDataService {
  getAll() {
    return http.get("/todotasks");
  }

  get(id) {
    return http.get(`/todotasks/${id}`);
  }

  create(data) {
    return http.post("/todotasks", data);
  }

  update(id, data) {
    return http.put(`/todotasks/${id}`, data);
  }

  delete(id) {
    return http.delete(`/todotasks/${id}`);
  }

  deleteAll() {
    return http.delete(`/todotasks`);
  }

  findByTitle(title) {
    return http.get(`/todotasks?title=${title}`);
  }
}

export default new TodoDataService();