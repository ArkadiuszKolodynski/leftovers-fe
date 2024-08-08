import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class HttpService {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseUrl: string = import.meta.env["VITE_API_BASE_URL"] || "") {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig | undefined,
  ): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig | undefined,
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(
    url: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig | undefined,
  ): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig | undefined,
  ): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}
