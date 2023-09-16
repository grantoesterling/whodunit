import Section from '@components/section'
import 'twin.macro'
import { BodyText } from '@components/body-text'
import { StarIcon } from '@components/icons'
import { HeadingText } from '@components/heading-text'

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
    tw="flex flex-col justify-start items-center md:items-start md:text-left fill-white text-center"
    className={className}
  >
    <div tw="flex items-center">
      {[...Array(5)].map((x, i) => (
        <StarIcon key={i} tw="fill-white" />
      ))}
    </div>
    <HeadingText size="sm" level={4} tw="font-marcellus mt-md">
      {title}
    </HeadingText>
    <BodyText size="reg" tw="mt-sm opacity-70">
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

const Testimonials = () => (
  <div id="testimonials">
    <Section tw="bg-darkerGreen md:py-24 py-16 text-white">
      <HeadingText size="lg" level={2} tw="text-center">
        What our customers are saying
      </HeadingText>
      <div tw="flex flex-col md:flex-row mt-2xl pt-sm justify-center items-start text-center gap-x-2xl gap-y-xl">
        <Testimonial
          tw="flex-1"
          title="Fits everything!"
          text="Finally an affordable pickleball bag that can hold all you need. You can go from a work out and then to the courts. And look cute while doing it all."
          author="MW"
          source="Amazon buyer"
        />
        <Testimonial
          tw="flex-1"
          title="Great Quality Pickle Ball bag!"
          text="Just received my order after just ordering it yesterday! Awesome! Exceeded my expectations! Already have my gear in the bag and ready to play! Holds all my paddle (4) 2 inside and 2 outside... Plenty of storage for the Pickelball balls, extra shirt, and towels! Nice water bottle holder on one side and cellphone/wallet on the other!"
          author="Sarah W"
          source="Amazon buyer"
        />
        <Testimonial
          tw="flex-1 hidden lg:flex"
          title="Pickleball bag that fits all my needs!"
          text="Super well made bag. Material feels great and holds a lot more than I was expecting. A lot of extra room in organizer pockets. Can carry everything I need for a day at the courts. Love the fact it clips to the fence!"
          author="Rachael O"
          source="Amazon buyer"
        />
      </div>
    </Section>
  </div>
)

export { Testimonials }
