import { useContext, Context } from 'react'
import { ContextState } from '../../contexts/createContextFactory/types'

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
