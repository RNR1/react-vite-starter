export type PaginatedResponse<Result extends object> = {
  pageCount: number;
  count: number;
  current: number;
  prev: number;
  next: number;
  results: Result[];
};
