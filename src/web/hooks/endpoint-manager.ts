import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface UseApiOptions<TBody> {
  method?: HttpMethod; // HTTP method (default: GET)
  body?: TBody; // Request body for POST/PUT
  headers?: Record<string, string>; // Optional headers
  params?: Record<string, any>; // Query parameters
}

interface UseApiResponse<TData> {
  data: TData | null;
  error: string | null;
  isLoading: boolean;
  callApi: (url: string, options?: UseApiOptions<any>) => Promise<void>;
}

export const useApi = <TData = any, TBody = any>(): UseApiResponse<TData> => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const callApi = useCallback(
    async (url: string, options?: UseApiOptions<TBody>) => {
      setIsLoading(true);
      setError(null);
      setData(null);

      const { method = "GET", body, headers = {}, params } = options || {};

      const config: AxiosRequestConfig = {
        method,
        url,
        headers,
        params,
        data: body,
      };

      try {
        const response: AxiosResponse<TData> = await axios(config);
        setData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { data, error, isLoading, callApi };
};
