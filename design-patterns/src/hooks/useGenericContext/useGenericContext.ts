import { useContext, Context } from 'react'
import { ContextState } from '../../contexts/createContextFactory/types'

/**
 * A generic hook for safely accessing context values with type safety and error handling.
 *
 * @template T - The type of state managed by the context.
 * @param context - The React Context object to retrieve the value from.
 * @param contextName - The name of the context, used for error messages.
 * @returns The context state value of type {@link ContextState<T>}.
 * @throws {Error} If the context is undefined, indicating the hook is used outside of its corresponding Provider.
 *
 * @example
 * ```typescript
 * const myContextState = useGenericContext(MyContext, 'MyContext');
 * ```
 */
export function useGenericContext<T>(
  context: Context<ContextState<T> | undefined>,
  contextName: string,
): ContextState<T> {
  const contextValue = useContext(context)

  if (!contextValue) {
    throw new Error(
      `${contextName} must be used within ${contextName}.Provider`,
    )
  }

  return contextValue
}
