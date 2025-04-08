export const partialApply = <P extends object>(
  Component: React.ComponentType<P>,
  partialProps: Partial<P>,
) => {
  return (props: Omit<P, keyof typeof partialProps>) => (
    <Component {...partialProps} {...(props as P)} />
  )
}
