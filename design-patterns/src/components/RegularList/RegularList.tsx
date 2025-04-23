type ItemComponentProps<T, R extends string> = {
  [K in R]: T
}

interface RegularListProps<T, R extends string> {
  items: T[]
  resourceName: R
  ItemComponent: React.ComponentType<ItemComponentProps<T, R>>
}

export const RegularList = <T, R extends string>({
  items,
  resourceName,
  ItemComponent,
}: RegularListProps<T, R>) => {
  return (
    <>
      {items.map((item, index) => {
        const props = {
          [resourceName]: item,
        } as ItemComponentProps<T, R>

        return <ItemComponent key={index} {...props} />
      })}
    </>
  )
}
