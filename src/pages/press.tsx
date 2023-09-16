import { GetStaticProps } from 'next'
import { GetPressDocument, PressFragment } from 'src/generated/graphql'
import { Meta } from 'src/layout/Meta'
import { createClient } from 'urql'
import 'twin.macro'

import { GRAPHQL_ENDPOINT } from 'src/utils/constants'
import { PressSection } from 'src/templates/PressSection'
import { SmallHero } from '@components/small-hero'

type PressPageProps = {
  press?: PressFragment[]
}

export default function PressPage(props: PressPageProps): React.ReactElement {
  const press = props.press
  if (!press) {
    return <div>404</div>
  }
  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={'Fresh Pickle in the press'}
        description={
          'All the great pickleball press that Fresh Pickle pickleball gear has received!'
        }
      />
      <div tw="mt-[64px]">
        <SmallHero
          title="Fresh Pickle in the Press"
          imageUrl="/assets/images/hero/2.jpg"
        />
        <PressSection press={press} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PressPageProps> = async () => {
  const client = createClient({
    url: GRAPHQL_ENDPOINT,
    requestPolicy: 'network-only',
  })

  const { data } = await client.query(GetPressDocument, {}).toPromise()

  const press = data?.allPress ?? undefined
  return {
    props: {
      press,
    },
  }
}
