import { Meta } from '../layout/Meta'
import 'twin.macro'

import { BodyText } from '@components/body-text'
import { HeadingText } from '@components/heading-text'
import Image from 'next/image'
const RegisterPage = () => (
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
              src="/assets/images/register.jpg"
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
            Register your purchase
          </HeadingText>
          <BodyText size="sm" tw="mt-xs mb-lg px-md text-center">
            Register here to receive information on future designs,monthly
            giveaways, and special offers
          </BodyText>
          <div
            id="omnisend-embedded-v2-643ad7e9158e7babd737b607"
            tw="w-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
)

export { RegisterPage }
