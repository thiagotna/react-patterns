import React, { useEffect, useState, Suspense } from 'react'
import { ResourceLoaderProps } from './types'

/**
 * Custom hook for fetching and loading remote resources.
 *
 * @param url - The URL endpoint to fetch data from
 * @param resourceName - The property name to extract from the JSON response
 * @returns An object containing the fetched data and loading state
 * @returns {any} data - The extracted resource data, or null if not yet loaded
 * @returns {boolean} loading - Loading state indicator
 *
 * @example
 * const { data, loading } = useResource('https://api.example.com/users', 'users')
 */
const useResource = (url: string, resourceName: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json[resourceName])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [url, resourceName])

  return { data, loading }
}

export const ResourceLoader = ({
  resourceUrl,
  resourceName,
  children,
}: ResourceLoaderProps) => {
  const { data, loading } = useResource(resourceUrl, resourceName)

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
