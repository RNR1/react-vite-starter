type AutocompleteParams = {
  /**
   * A search term
   */
  q?: string;
};

type SortingParams = {
  /**
   * Which field to use when ordering the results.
   */
  ordering?: string;
};

type PaginationParams = {
  /**
   * A page number within the paginated result set.
   */
  page?: number;
  /**
   * Number of results to return per page.
   */
  size?: number;
};

export type ListParams = PaginationParams & SortingParams & AutocompleteParams;
