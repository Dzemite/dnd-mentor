import api from "./axios";

abstract class CrudService<T> {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  get(id: string | number) {
    return api.get<T>(`${this.path}/${id}`)
  }
}

export default CrudService;