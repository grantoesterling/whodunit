/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, ButtonType } from '@components/button'
import { HeadingText } from '@components/heading-text'
import Section from '@components/section'
import React from 'react'
import 'twin.macro'
import Image from 'next/image'
export const RegisterSection = (): React.ReactElement => {
  return (
    <>
      <Section tw="bg-darkGreen pb-2xl pt-[64px] border-b border-white border-opacity-25">
        <div tw="flex flex-col items-center justify-center">
          <div tw="relative h-[28px] w-[173px] mb-sm">
            <Image
              src="/assets/icons/white-text-white-icon.png"
              fill
              style={{
                objectFit: 'contain',
              }}
              alt="Fresh Pickle Logo White"
              sizes="173px"
            />
          </div>
          <HeadingText
            level={2}
            size="reg"
            tw="text-white font-extrabold text-center"
          >
            Register your purchase for exclusive offers
          </HeadingText>

          <Button
            tw="mt-md"
            buttonType={ButtonType.white}
            size="md"
            to="/register"
          >
            REGISTER NOW
          </Button>
        </div>
      </Section>
    </>
  )
}
