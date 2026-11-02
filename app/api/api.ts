import axios from 'axios';
import type { AxiosError } from 'axios';

export type ApiError = AxiosError<{ error: string }>;

export const api = axios.create({
  baseURL: 'https://note-hub-055q.onrender.com',
  withCredentials: true,
});
