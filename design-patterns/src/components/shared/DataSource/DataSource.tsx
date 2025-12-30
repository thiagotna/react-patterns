import React, { useState, useEffect, Suspense } from 'react'
import { DataSourceProps } from './types'

/**
 * DataSource component that fetches data and provides it to child components.
 *
 * This component implements the Render Props pattern, fetching data asynchronously
 * and injecting it into child components via props cloning.
 *
 * @component
 * @example
 * ```tsx
 * <DataSource
 *   getDataFunction={async () => fetch('/api/users').then(r => r.json())}
 *   resourceName="users"
 * >
 *   <UserList />
 * </DataSource>
 * ```
 *
 * @param {DataSourceProps} props - The component props
 * @param {() => Promise<any>} props.getDataFunction - Async function that fetches the data
 * @param {string} props.resourceName - The prop name to inject data into child components
 * @param {ReactNode} props.children - Child components that will receive the fetched data
 *
 * @returns {JSX.Element} Loading state or rendered children with injected data
 */
export const DataSource = ({
  getDataFunction,
  resourceName,
  children,
}: DataSourceProps) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const result = await getDataFunction()
      setData(result)
      setLoading(false)
    })()
  }, [getDataFunction])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: data })
        }
        return child
      })}
    </Suspense>
  )
}
