import { GetStaticProps } from 'next'
import {
  GetHomePageDataDocument,
  HomePageProductFragment,
} from 'src/generated/graphql'
import { Meta } from 'src/layout/Meta'

import { createClient } from 'urql'
import 'twin.macro'

import { AppConfig } from 'src/utils/AppConfig'

import { Hero } from 'src/templates/Hero'
import { GRAPHQL_ENDPOINT } from 'src/utils/constants'

type HomePageProps = {
  products: HomePageProductFragment[]
}

export default function HomePage(props: HomePageProps): React.ReactElement {
  const _products = props.products //.concat(props.blogPosts)
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div tw="mt-[64px]">
        <Hero />

      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const client = createClient({
    url: GRAPHQL_ENDPOINT,
    requestPolicy: 'network-only',
  })
  const { data } = await client.query(GetHomePageDataDocument, {}).toPromise()

  const products = data?.allProduct ?? []
  return {
    props: {
      products,
    },
  }
}
