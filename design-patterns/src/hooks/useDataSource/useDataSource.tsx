import { useEffect, useState } from 'react'

interface GetResourceFunction<T> {
  (): Promise<T>
}

export const useDataSource = <T,>(
  getResourceFunction: GetResourceFunction<T>,
) => {
  const [resource, setResource] = useState<T | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await getResourceFunction()
        setResource(result)
      } catch (error) {
        console.error('Error fetching resource:', error)
      }
    })()
  }, [getResourceFunction])

  return resource
}
