import { GetStaticProps } from 'next'
import {
  GetHomePageDataDocument,
  HomePageProductFragment,
} from 'src/generated/graphql'
import { Meta } from 'src/layout/Meta'

import { createClient } from 'urql'
import 'twin.macro'

import { AppConfig } from 'src/utils/AppConfig'
import { OurProducts } from 'src/templates/OurProducts'
import { RegisterSection } from '@components/register-section'
import { Contact } from 'src/templates/Contact'
import { Hero } from 'src/templates/Hero'
import { Testimonials } from 'src/templates/Testimonials'
import { Video } from 'src/templates/Video'
const GRAPHQL_ENDPOINT = `https://i13g1hes.api.sanity.io/v2023-08-01/graphql/production/default`

type HomePageProps = {
  products: HomePageProductFragment[]
}

export default function HomePage(props: HomePageProps): React.ReactElement {
  const products = props.products //.concat(props.blogPosts)
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div tw="mt-[64px]">
        <Hero />
        <OurProducts products={products} />
        <Testimonials />
        <Video />
        <Contact />
        <RegisterSection />
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
