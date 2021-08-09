import React, { ReactElement, ReactNode, useMemo } from 'react'

/**
 * bootstrap break points
 * 
    $grid-breakpoints: (
      xs: 0,
      sm: 576px,
      md: 768px,
      lg: 992px,
      xl: 1200px,
      xxl: 1400px
    );
 */
type BootstrapBreakpoints = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

type Props = {
  /**
   * least viewport that children can be displayed
   */
  atLeast?: BootstrapBreakpoints
  /**
   * most viewport that children can be displayed
   */
  atMost?: BootstrapBreakpoints
  children?: ReactNode
}

function Breakpoint(props: Props): ReactElement {
  const { atLeast, atMost, children } = props

  const className = useMemo(() => {
    let cls = ''
    if (atLeast) cls += `d-none d-${atLeast}-block `
    if (atMost) cls += `d-${atMost}-none`
    return cls
  }, [atLeast, atMost])

  return <div className={className}>{children}</div>
}

export default Breakpoint
