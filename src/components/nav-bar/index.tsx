import Section from '@components/section'
import 'twin.macro'
import { Button, ButtonType } from '@components/button'
import { HamburgerButton, HamburgerMenu } from '@components/hamburger-menu'
import React from 'react'
import Image from 'next/image'
import { ProductNavFragment } from 'src/generated/graphql'
import { CaretIcon } from '@components/icons'

const ExpandingMenuItem = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const [open, setOpen] = React.useState(false)

  const handleMouseEnter = () => {
    setOpen(true)
  }

  const handleMouseLeave = () => {
    setOpen(false)
  }
  return (
    <div tw="relative">
      <Button
        buttonType={ButtonType.unstyled}
        size="sm"
        tw="gap-x-xs justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
        <CaretIcon />
      </Button>
      {open && (
        <div
          tw="absolute bg-offWhite rounded-lg z-30 w-full shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  )
}

const DesktopNav = ({
  products,
}: {
  products?: ProductNavFragment[]
}): React.ReactElement => {
  return (
    <div tw="items-center gap-x-xs hidden lg:flex">
      <ExpandingMenuItem title="OUR PRODUCTS">
        <div tw="flex flex-col">
          {products?.map((product) => (
            <Button
              key={product.slug?.current}
              buttonType={ButtonType.nav}
              to={`/product-category/${product.category?.slug?.current}/${product.slug?.current}`}
              tw="hover:text-darkerGreen"
            >
              {product.name}
            </Button>
          ))}
        </div>
      </ExpandingMenuItem>
      <Button buttonType={ButtonType.unstyled} size="sm" to={'/resources'}>
        BLOG
      </Button>
      <ExpandingMenuItem title="ABOUT US">
        <div tw="flex flex-col items-center">
          <Button buttonType={ButtonType.nav} to={'/aboutus'}>
            Our Story
          </Button>
          <Button buttonType={ButtonType.nav} to={'/press'}>
            Press
          </Button>
        </div>
      </ExpandingMenuItem>
      <ExpandingMenuItem title="CONTACT">
        <div tw="flex flex-col items-center">
          <Button buttonType={ButtonType.nav} to={'/customerservice'}>
            Customer Service
          </Button>
          <Button buttonType={ButtonType.nav} to={'/wholesale'}>
            Wholesale
          </Button>
          <Button buttonType={ButtonType.nav} to={'/register'}>
            Register
          </Button>
        </div>
      </ExpandingMenuItem>
      <Button buttonType={ButtonType.solid} tw="ml-xs" size="sm">
        SHOP NOW
      </Button>
    </div>
  )
}

export const NavBar = ({
  products,
}: {
  products?: ProductNavFragment[]
}): React.ReactElement => {
  const [hamburgerMenuVisible, setHamburgerMenuVisible] =
    React.useState<boolean>(false)

  const onHamburgerClick = () => {
    setHamburgerMenuVisible(!hamburgerMenuVisible)
  }

  return (
    <>
      {hamburgerMenuVisible ? (
        <HamburgerMenu
          onHamburgerClick={onHamburgerClick}
          products={products}
        />
      ) : null}
      <Section tw="bg-offWhite py-[12px] z-30 absolute top-0 h-[64px] w-full">
        <div tw="flex justify-between items-center z-50">
          <Button buttonType={ButtonType.unstyled} size="sm" to={'/'}>
            <div tw="relative h-[28px] w-[173px]">
              <Image
                src="/assets/icons/black-text-green-icon.png"
                fill
                style={{
                  objectFit: 'contain',
                }}
                alt="Fresh Pickle Logo"
                sizes="173px"
              />
            </div>
          </Button>

          <DesktopNav products={products} />
          <HamburgerButton onHamburgerClick={onHamburgerClick} />
        </div>
      </Section>
    </>
  )
}
