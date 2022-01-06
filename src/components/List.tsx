import * as React from 'react';

export interface ListProps<T extends Record<string, unknown>> {
  items: T[];
  emptyStateElement: React.ReactElement;
  renderOption: (item: T, idx?: number) => React.ReactNode;
}

const List = <T extends Record<string, unknown>>({
  items = [],
  emptyStateElement,
  renderOption,
}: ListProps<T>) => (
  <ul>
    {items.length ? items.map(renderOption) : <li>{emptyStateElement}</li>}
  </ul>
);
export default List;
