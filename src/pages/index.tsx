import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Divar clone</title>
      </Head>
      <h1>Divar clone</h1>
      <span className="lnr lnr-mustache"></span> lnr-mustache
      <div className="row">
        <div className="col-6 bg-danger">col 6 v1</div>
        <div className="col-6 bg-info">col 6 v2</div>
      </div>
    </div>
  )
}
