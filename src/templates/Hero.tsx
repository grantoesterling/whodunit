import Section from '@components/section'
import 'twin.macro'
import { HeadingText } from '@components/heading-text'
import { Button, ButtonType } from '@components/button'
import Image from 'next/image'

const Hero = () => (
  <div tw="w-full h-[75vh]">
    <Image
      src="/assets/images/hero.jpg"
      sizes="100vw"
      alt="hero"
      fill
      style={{
        objectFit: 'cover',
      }}
      tw="-z-20 brightness-75"
    />

    <Section tw="z-10 justify-center items-center flex h-full">
      <div tw="flex flex-col mx-auto lg:w-2/3 my-auto justify-center items-center text-center text-white ">
        <HeadingText size="display" level={1} tw="">
          Introducing the Lola Pickleball Tote
        </HeadingText>
        <Button
          size="lg"
          buttonType={ButtonType.white}
          tw="mt-xl"
          to="#products"
        >
          SHOP NOW
        </Button>
      </div>
    </Section>
  </div>
)

export { Hero }
