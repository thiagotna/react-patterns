import React, { useEffect, useState, Suspense } from 'react'

interface ResourceLoaderProps {
  resourceUrl: string
  resourceName: string
  children: React.ReactNode
}

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
