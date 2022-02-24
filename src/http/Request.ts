import Axios, { AxiosStatic, AxiosRequestHeaders } from 'axios';

export class Request {
  private httpClient: AxiosStatic;

  private baseUrl: string;

  constructor() {
    this.httpClient = Axios;
    this.baseUrl = 'http://localhost:8080';
  }

  async get(route: string, headers?: AxiosRequestHeaders) {
    const path = `${this.baseUrl}/${route}`;

    try {
      const response = await this.httpClient.get(path, {
        headers,
      });

      return {
        data: response.data,
        status: response.status,
        error: '',
      };
    } catch (err: any) {
      return {
        data: null,
        status: 400,
        error: 'O CEP informado não foi encontrado',
      };
    }
  }
}
