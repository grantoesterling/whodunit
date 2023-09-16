/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BodyText } from '@components/body-text'
import { MinusIcon, PlusIcon } from '@components/icons'
import React from 'react'
import 'twin.macro'

type ProductSectionProps = {
  name: string
  bullets: (string | null)[]
}

export const ProductSection = ({
  name,
  bullets,
}: ProductSectionProps): React.ReactElement => {
  const [showDetails, setShowDetails] = React.useState(false)
  return (
    <div tw="border-b border-b-darkGreen py-md px-xs">
      <div
        tw="flex justify-between items-center"
        onClick={() => setShowDetails(!showDetails)}
      >
        <BodyText size="reg" tw="font-extrabold">
          {name}
        </BodyText>
        {showDetails ? <MinusIcon /> : <PlusIcon />}
      </div>
      {showDetails && (
        <ul tw="list-disc pl-sm pt-sm">
          {bullets.map((bullet) => (
            <li key={bullet}>
              <BodyText size="sm">{bullet}</BodyText>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
