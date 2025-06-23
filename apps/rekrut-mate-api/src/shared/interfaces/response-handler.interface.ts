export interface IResponseHandler<T> {
  status: number;
  message: string;
  data: T;
}
