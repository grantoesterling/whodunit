import { BodyText } from '@components/body-text'

import { HeadingText } from '@components/heading-text'
import Section from '@components/section'
import Image from 'next/image'
import Link from 'next/link'
import { HomePageProductFragment } from 'src/generated/graphql'
import 'twin.macro'

export const OurProducts = ({
  products,
}: {
  products: HomePageProductFragment[]
}) => {
  return (
    <div id="products">
      <Section tw="bg-white">
        <div tw="flex flex-col md:py-24 py-16 items-center">
          <HeadingText
            size="lg"
            level={1}
            tw="font-extrabold font-marcellus tracking-[-0.04em] text-darkGreen"
          >
            Our Products
          </HeadingText>
          <div tw="flex items-center justify-center mt-sm">
            {products?.map((product) => (
              <Link
                href={`/product-category/${product.category?.slug?.current}/${product.slug?.current}`}
                key={product.slug?.current}
              >
                <div tw="flex flex-col items-center justify-center gap-y-sm">
                  <div tw="relative w-[500px] h-[400px] hover:scale-110 duration-200">
                    <Image
                      src={product.images?.[0]?.colors?.[0]?.asset?.url ?? ''}
                      alt="about"
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                      tw="rounded-sm"
                    />
                  </div>
                  <div>
                    <HeadingText size="reg" tw="font-manrope">
                      {product.name}
                    </HeadingText>
                    <BodyText size="reg" tw="text-center opacity-50">
                      {product.images?.length} colors
                    </BodyText>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
