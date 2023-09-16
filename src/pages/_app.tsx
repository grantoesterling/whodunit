import { AppProps } from 'next/app'

import GlobalStyles from '@components/global-styles'
import { NavBar } from '@components/nav-bar'
import { Footer } from '@components/footer'
import { GetNavDataDocument, ProductNavFragment } from 'src/generated/graphql'
import { createClient } from 'urql'
import { GRAPHQL_ENDPOINT } from 'src/utils/constants'

type ExtraAppProps = {
  navProducts: ProductNavFragment[]
} & AppProps

const App = ({ Component, pageProps, navProducts }: ExtraAppProps) => (
  <>
    <GlobalStyles />
    <NavBar products={navProducts} />
    <Component {...pageProps} />
    <Footer />
  </>
)

App.getInitialProps = async () => {
  const client = createClient({
    url: GRAPHQL_ENDPOINT,
  })

  const { data } = await client.query(GetNavDataDocument, {}).toPromise()

  const navProducts = data?.allProduct
  return {
    navProducts,
  }
}

export default App
