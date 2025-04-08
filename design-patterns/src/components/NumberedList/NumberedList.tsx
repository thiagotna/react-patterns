interface NumberedListProps {
  items: any[]
  resourceName: string
  ItemComponent: React.ComponentType<any>
}

export const NumberedList = ({
  items,
  resourceName,
  ItemComponent,
}: NumberedListProps) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          {index + 1}
          <ItemComponent
            key={index}
            {...{ [resourceName]: item }} // Spread the item as a prop with the name of the resource
          />
        </>
      ))}
    </>
  )
}
