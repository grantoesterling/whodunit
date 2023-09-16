/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEvent } from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import 'twin.macro'
import { ColorFragment } from 'src/generated/graphql'
interface ColorSelectorProps {
  colors: (ColorFragment | null)[]
  mainColor: ColorFragment | null
  onColorHover: (
    color: ColorFragment | null,
    event: MouseEvent<HTMLDivElement>
  ) => void
  onColorClick: (color: ColorFragment | null) => void
  className?: string
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  mainColor,
  onColorClick,
  onColorHover,
  className,
}) => {
  return (
    <div tw="flex w-full flex-col items-center gap-y-md" className={className}>
      <div tw="flex space-x-2 self-start">
        {colors.map((color, index) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={index}
            className={`border-gray-300 relative h-12 w-12 cursor-pointer rounded-[24px] border-[0.5px] ${
              mainColor === color ? 'border-[1.5px]' : ''
            }`}
            onClick={() => onColorClick(color)}
            onMouseEnter={(event) => onColorHover(color, event)}
            onMouseLeave={(event) => onColorHover(color, event)}
          >
            <Image
              src={color?.icon?.asset?.url ?? ''}
              width={48}
              height={48}
              alt={`${color} thumbnail`}
              style={{
                borderRadius: '24px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
