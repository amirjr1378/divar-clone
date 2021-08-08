import '../styles/globals.scss'

import MobileDetect from 'mobile-detect'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'

import Head from '@/components/containers/Head'
import DefaultLayout from '@/components/containers/layout/DefaultLayout'
import ReduxProviderWrapper from '@/redux/ProviderWrapper'

function MyApp(
  props: AppProps & {
    isTouchDevice?: boolean
  }
) {
  const { Component, pageProps, isTouchDevice } = props
  const Layout = (Component as any).Layout || DefaultLayout

  return (
    <>
      <Head />
      <ReduxProviderWrapper>
        <Layout {...pageProps} isTouchDevice={isTouchDevice}>
          <Component {...pageProps} />
        </Layout>
      </ReduxProviderWrapper>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req } = appContext.ctx
  // detect user device
  const md = new MobileDetect(req?.headers?.['user-agent'] as string)
  const isTouchDevice = md.mobile() || md.tablet()
  const appProps = await App.getInitialProps(appContext)
  return {
    ...appProps,
    isTouchDevice,
  }
}

export default MyApp
