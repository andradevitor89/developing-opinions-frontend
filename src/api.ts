import axios, { AxiosInstance } from 'axios';
import Article from './models/Article';

export default class Api {
  api_url: string;
  client: AxiosInstance | null;

  constructor() {
    this.client = null;
    this.api_url = 'http://127.0.0.1:8000';
  }

  init = () => {
    let headers = {
      Accept: 'application/json',
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getArticles = (): Promise<Article[]> => {
    return new Promise<Article[]>((res, rej) => {
      this.init()
        .get('/articles/list/')
        .then((response) =>
          res(
            response.data.map(
              (a: Article) => new Article(a)
            )
          )
        )
        .catch((error) => {
          console.error(error);
          rej([]);
        });
    });
  };

  getArticleById = async (id: number): Promise<Article> => {
    return new Promise<Article>((res, rej) => {
      this.init()
        .get(`/articles/${id}/`)
        .then((response) => res(new Article(response.data)))
        .catch((error) => {
          console.error(error);
          rej(null);
        });
    });
  };
}
