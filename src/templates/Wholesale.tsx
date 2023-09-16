import { Meta } from '../layout/Meta'
import 'twin.macro'

import { BodyText } from '@components/body-text'
import { HeadingText } from '@components/heading-text'
import Image from 'next/image'
const WholesalePage = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={'Fresh Pickle - Register your purchase'}
      description={
        'Register your Fresh Pickle purchase to receive exclusive offers on future pickleball products'
      }
    />
    <div tw="mt-[64px]">
      <div tw="flex w-full justify-center items-center">
        <div tw="w-1/2 h-[100vh] hidden lg:block">
          <div tw="relative h-[100vh]">
            <Image
              src="/assets/images/wholesale.jpg"
              alt="about"
              fill
              style={{
                objectFit: 'cover',
              }}
              sizes="50vw"
              tw="self-end"
            />
          </div>
        </div>
        <div tw="lg:w-1/2 w-full flex flex-col  h-full justify-center items-center lg:px-[108px] px-2xl py-2xl">
          <HeadingText size="lg" level={1} tw="font-extrabold text-center">
            Wholesale
          </HeadingText>
          <BodyText size="sm" tw="mt-xs mb-lg px-md text-center">
            Interested in selling Fresh Pickle products in your store?
          </BodyText>
          <div
            id="omnisend-embedded-v2-645ab203e54adad5ac574e5c"
            tw="w-full font-manrope"
          ></div>
        </div>
      </div>
    </div>
  </div>
)

export { WholesalePage }
