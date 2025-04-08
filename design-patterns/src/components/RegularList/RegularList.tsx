interface RegularListProps {
  items: any[]
  resourceName: string
  ItemComponent: React.ComponentType<any>
}

export const RegularList = ({
  items,
  resourceName,
  ItemComponent,
}: RegularListProps) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent
          key={index}
          {...{ [resourceName]: item }} // Spread the item as a prop with the name of the resource
        />
      ))}
    </>
  )
}
