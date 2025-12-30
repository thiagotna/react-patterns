import { useEffect, useState } from 'react'

interface GetResourceFunction<T> {
  (): Promise<T>
}

/**
 * Custom hook for fetching and managing async data resources.
 *
 * @template T - The type of the resource being fetched.
 * @param {GetResourceFunction<T>} getResourceFunction - An async function that fetches and returns the resource of type T.
 * @returns {T | null} The fetched resource, or null if data has not been loaded yet.
 *
 * @example
 * ```typescript
 * const user = useDataSource(() => fetchUser(userId));
 * ```
 *
 * @remarks
 * - The hook automatically handles async operations and error logging.
 * - The resource is re-fetched whenever `getResourceFunction` changes.
 * - Errors during fetching are logged to the console.
 */
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
