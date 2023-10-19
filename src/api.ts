import axios, { AxiosInstance } from 'axios';

export default class Api {
  api_token: string;
  api_url: string;
  client: AxiosInstance | null;

  constructor() {
    this.api_token = '';
    this.client = null;
    this.api_url = 'http://127.0.0.1:8000';
  }

  init = () => {
    this.api_token = '';

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

  getArticles = () => {
    return this.init().get('/articles/');
  };
}
