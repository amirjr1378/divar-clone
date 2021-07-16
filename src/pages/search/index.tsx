import { useRouter } from 'next/dist/client/router'
import React, { ReactElement } from 'react'

function Search(): ReactElement {
  const router = useRouter()

  return <div>search page {router.query.cityID}</div>
}

export default Search
