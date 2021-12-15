import axios, { AxiosRequestConfig } from 'axios';

/**
 * Sigleton Class HttpClient
 */
export class HttpClient {
    private static instance: HttpClient;
    private client = axios;
    private baseUrl: string;
    constructor(baseUrl: string) {
        if (HttpClient.instance instanceof HttpClient) {
            return HttpClient.instance;
        }
        this.baseUrl = baseUrl;
        Object.freeze(this);
        HttpClient.instance = this;
    }

    get(endpoint: string, options?: AxiosRequestConfig) {
        return this.client.get(this.getUrl(endpoint), options);
    }

    put(endpoint: string, data: unknown, options?: AxiosRequestConfig) {
        return this.client.put(this.getUrl(endpoint), data, options);
    }

    post(endpoint: string, data: unknown, options?: AxiosRequestConfig) {
        return this.client.post(this.getUrl(endpoint), data, options);
    }

    delete(endpoint: string, options?: AxiosRequestConfig) {
        return this.client.delete(this.getUrl(endpoint), options);
    }

    patch(endpoint: string, data: unknown, options?: AxiosRequestConfig) {
        return this.client.patch(this.getUrl(endpoint), data, options);
    }

    private getUrl(endpoint: string): string {
        return this.baseUrl + endpoint;
    }
}
