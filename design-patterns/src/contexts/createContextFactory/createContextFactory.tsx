import { createContext, Context, JSX, useContext, ReactNode } from 'react'

/**
 * Creates a context factory with a provider and custom hook.
 *
 * This factory function generates a complete context setup including a React Context,
 * a Provider component, and a custom hook for consuming the context value.
 *
 * @template T - The type of the context value
 * @param {string} displayName - The display name for the context, used in error messages and DevTools
 * @param {() => T} createValue - A function that creates and returns the context value
 * @returns {Object} An object containing the context, provider component, and custom hook
 * @returns {Context<T | undefined>} returns.Context - The React Context object
 * @returns {Function} returns.Provider - A provider component that wraps children with context
 * @returns {Function} returns.useContext - A custom hook to access the context value
 * @throws {Error} Throws an error if the custom hook is used outside of the Provider component
 *
 * @example
 * // Create a user context
 * const { Context, Provider, useContext: useUserContext } = createContextFactory(
 *   'UserContext',
 *   () => ({ userId: '123', name: 'John Doe' })
 * )
 *
 * // Use in your app
 * <Provider>
 *   <App />
 * </Provider>
 *
 * // Access in components
 * const user = useUserContext()
 */
export function createContextFactory<T>(
  displayName: string,
  createValue: () => T,
): {
  Context: Context<T | undefined>
  Provider: ({ children }: { children: ReactNode }) => JSX.Element
  useContext: () => T
} {
  const Context = createContext<T | undefined>(undefined)
  Context.displayName = displayName

  const Provider = ({ children }: { children: ReactNode }) => {
    const value = createValue()

    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  const useContextHook = () => {
    const context = useContext(Context)
    if (!context) {
      throw new Error(
        `${displayName} must be used within ${displayName}.Provider`,
      )
    }
    return context
  }

  return {
    Context,
    Provider,
    useContext: useContextHook,
  }
}
