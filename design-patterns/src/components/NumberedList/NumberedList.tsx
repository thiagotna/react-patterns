type ItemComponentProps<T, R extends string> = {
  [K in R]: T
}
interface NumberedListProps<T, R extends string> {
  items: T[]
  resourceName: R
  ItemComponent: React.ComponentType<ItemComponentProps<T, R>>
}

export const NumberedList = <T, R extends string>({
  items,
  resourceName,
  ItemComponent,
}: NumberedListProps<T, R>) => {
  return (
    <>
      {items.map((item, index) => {
        const props = {
          [resourceName]: item,
          index: index + 1,
        } as ItemComponentProps<T, R>

        return <ItemComponent key={index} {...props} />
      })}
    </>
  )
}
