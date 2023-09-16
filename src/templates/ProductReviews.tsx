import Section from '@components/section'
import 'twin.macro'
import { BodyText } from '@components/body-text'
import { StarIcon } from '@components/icons'
import { HeadingText } from '@components/heading-text'
import { ReviewFragment } from 'src/generated/graphql'

type TestimonialProps = {
  title: string
  text: string
  author: string
  source: string
  className?: string
}

const Testimonial = ({
  title,
  text,
  author,
  source,
  className,
}: TestimonialProps): React.ReactElement => (
  <div
    tw="flex flex-col justify-start items-start text-left"
    className={className}
  >
    <div tw="flex items-center">
      {[...Array(5)].map((x, i) => (
        <StarIcon key={i} tw="fill-darkGreen" />
      ))}
    </div>
    <BodyText size="lg" tw="font-marcellus mt-sm">
      {title}
    </BodyText>
    <BodyText size="reg" tw="mt-sm">
      {text}
    </BodyText>
    <BodyText size="reg" tw="mt-md">
      - {author}
    </BodyText>
    <BodyText size="reg" tw="opacity-50">
      {source}
    </BodyText>
  </div>
)

export const ProductReviews = ({
  reviews,
}: {
  reviews?: ReviewFragment[]
}): React.ReactElement => {
  if (!reviews) {
    return <></>
  }
  return (
    <div id="testimonials">
      <Section tw="bg-white md:py-24 py-16">
        <HeadingText size="lg" level={2} tw="">
          What our customers are saying
        </HeadingText>
        <div tw="flex flex-col md:flex-row mt-2xl justify-center items-start text-center gap-x-2xl text-darkerGreen gap-y-xl">
          {reviews.map((review, index) => (
            <Testimonial
              key={index}
              tw="flex-1"
              title={review.title ?? ''}
              text={review.review ?? ''}
              author={review.author ?? ''}
              source={review.source ?? ''}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}
