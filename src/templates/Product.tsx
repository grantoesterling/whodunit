import { BodyText } from '@components/body-text'
import { Button, ButtonType } from '@components/button'
import { ColorSelector } from '@components/color-selector'
import { Gallery } from '@components/gallery'
import { HeadingText } from '@components/heading-text'
import { ProductSection } from '@components/product-section'
import Section from '@components/section'
import { MouseEvent, useState } from 'react'
import { ColorFragment } from 'src/generated/graphql'
import 'twin.macro'

export const Product = ({
  name,
  price,
  description,
  amazonLink,
  colors,
  productDetailBullets,
  materialBullets,
  dimensionsBullets,
}: {
  name: string
  price: number
  description: string
  amazonLink: string
  colors: (ColorFragment | null)[]
  productDetailBullets: (string | null)[]
  materialBullets: (string | null)[]
  dimensionsBullets: (string | null)[]
}): React.ReactElement => {
  const [mainColor, setMainColor] = useState(colors[0])
  const [shownColor, setShownColor] = useState(colors[0])
  return (
    <Section tw="bg-paleGreen">
      <div tw="flex flex-col md:py-24 py-16">
        <div tw="flex flex-col lg:flex-row w-full justify-center lg:justify-start gap-x-[80px] mt-lg">
          <Gallery
            tw="lg:w-3/5 w-full "
            images={
              shownColor?.colors?.map((image) => image?.asset?.url ?? '') ?? []
            }
          />
          <div tw="lg:w-2/5 w-full">
            <div tw="flex w-full justify-between items-center mt-lg">
              <HeadingText size="reg" level={2} tw="font-extrabold ">
                {name}
              </HeadingText>
              <HeadingText size="sm" level={3} tw="font-extrabold">
                ${price}
              </HeadingText>
            </div>

            <BodyText size="reg" tw="mt-xs opacity-75">
              {description}
            </BodyText>

            <BodyText size="reg" tw="mt-md mb-[12px] font-extrabold">
              {`Color: ${shownColor?.name}`}
            </BodyText>
            <ColorSelector
              colors={colors}
              mainColor={mainColor}
              onColorHover={(
                color: ColorFragment | null,
                event: MouseEvent<HTMLDivElement>
              ) => {
                if (event.type === 'mouseenter') {
                  setShownColor(color)
                } else if (event.type === 'mouseleave') {
                  setShownColor(mainColor)
                }
              }}
              onColorClick={(color) => setMainColor(color)}
            />
            <Button
              size="md"
              buttonType={ButtonType.solid}
              tw="w-full justify-center my-xl"
              to={amazonLink}
              target="_blank"
              id="buy-now-button"
            >
              BUY NOW
            </Button>
            <ProductSection
              name="Product details"
              tw="mt-xl"
              bullets={productDetailBullets}
            />
            <ProductSection name="Material" bullets={materialBullets} />
            <ProductSection name="Dimensions" bullets={dimensionsBullets} />
          </div>
        </div>
      </div>
    </Section>
  )
}
