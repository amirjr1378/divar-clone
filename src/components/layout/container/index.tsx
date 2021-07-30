import React, { ReactElement } from 'react'
import { Container, ContainerProps } from 'react-bootstrap'

function PageContainer(props: ContainerProps): ReactElement {
  const { children, ...rest } = props
  return <Container {...rest}>{children}</Container>
}

export default PageContainer
