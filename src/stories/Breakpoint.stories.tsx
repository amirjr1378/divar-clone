import React from 'react'

import Breakpoint from '@/components/responsive/Breakpoint'

export default {
  title: 'Components/Breakpoint',
  component: Breakpoint,
}

export const BreakpointDemo = () => (
  <>
    <h4> change viewport to see differences </h4>

    <h5>least breakpoints</h5>
    <Breakpoint atLeast="sm">sm and upper break point</Breakpoint>
    <Breakpoint atLeast="md">md and upper break point</Breakpoint>
    <Breakpoint atLeast="lg">lg and upper break point</Breakpoint>
    <Breakpoint atLeast="xl">xl and upper break point</Breakpoint>
    <Breakpoint atLeast="xxl">xxl and upper break point</Breakpoint>
    <br />
    <br />

    <h5>most breakpoints</h5>
    <Breakpoint atMost="sm">sm and lower break point</Breakpoint>
    <Breakpoint atMost="md">md and lower break point</Breakpoint>
    <Breakpoint atMost="lg">lg and lower break point</Breakpoint>
    <Breakpoint atMost="xl">xl and lower break point</Breakpoint>
    <Breakpoint atMost="xxl">xxl and lower break point</Breakpoint>
  </>
)
