import { NumberedListProps, ItemComponentProps } from './types'

/**
 * Renders a numbered list of items with a custom item component.
 *
 * @template T - The type of items in the list
 * @template R - The resource name key as a string literal type
 *
 * @param props - The component props
 * @param props.items - Array of items to render
 * @param props.resourceName - The property name to assign to each item in the component props
 * @param props.ItemComponent - React component to render for each item, receives the item and 1-based index
 *
 * @returns A React fragment containing the rendered numbered list items
 */
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
