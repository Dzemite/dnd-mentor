import api from "./axios";

abstract class Graphql<T> {
  private path = '/graphql';

  post(query: string) {
    return api.post<T>(this.path, { query });
  }
}

export default Graphql;