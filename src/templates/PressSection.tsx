import Section from '@components/section'
import 'twin.macro'
import { BodyText } from '@components/body-text'
import { HeadingText } from '@components/heading-text'
import { PressFragment } from 'src/generated/graphql'
import Link from 'next/link'
import Image from 'next/image'
import { Button, ButtonType } from '@components/button'
type PressItemProps = {
  item: PressFragment
  className?: string
}

const PressItem = ({ item, className }: PressItemProps): React.ReactElement => (
  <Link
    href={item?.link ?? ''}
    tw="cursor-pointer w-full h-full"
    target="_blank"
    className={className}
  >
    <div tw="h-full flex flex-col items-center gap-x-lg bg-white p-sm pb-md rounded-lg shadow-md hover:scale-[1.01] duration-100 justify-between text-left">
      <div tw="flex flex-col items-center">
        <div tw="relative w-1/2 h-[20vh]">
          <Image
            src={item.image?.asset?.url ?? ''}
            alt="about"
            fill
            style={{
              objectFit: 'contain',
            }}
            tw="rounded-sm"
          />
        </div>
        <div tw="px-sm mt-lg">
          <HeadingText
            size="sm"
            tw="font-marcellus mt-sm text-center underline"
          >
            {item.title}
          </HeadingText>
          <BodyText size="reg" tw="mt-sm">
            {item.summary}
          </BodyText>

          <BodyText size="reg" tw="opacity-50 mt-xs mb-md">
            {item.authorBio}
          </BodyText>
        </div>
      </div>
      <div tw="flex w-full justify-end">
        <Button
          buttonType={ButtonType.solid}
          size="sm"
          tw="justify-center items-center"
        >
          Read now
        </Button>
      </div>
    </div>
  </Link>
)

export const PressSection = ({
  press,
}: {
  press?: PressFragment[]
}): React.ReactElement => {
  if (!press) {
    return <></>
  }
  return (
    <Section tw="bg-paleGreen py-2xl ">
      <div tw="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-start text-center gap-lg text-darkerGreen">
        {press.map((pressItem, index) => (
          <PressItem key={index} tw="flex-1 h-full" item={pressItem} />
        ))}
      </div>
    </Section>
  )
}
