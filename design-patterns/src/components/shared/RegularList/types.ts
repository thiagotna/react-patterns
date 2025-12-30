export type ItemComponentProps<T, R extends string> = {
  [K in R]: T
}

export interface RegularListProps<T, R extends string> {
  items: T[]
  resourceName: R
  ItemComponent: React.ComponentType<ItemComponentProps<T, R>>
}
