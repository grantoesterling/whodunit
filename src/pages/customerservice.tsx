import { EmailIcon, DotsIcon } from '@components/icons'
import Section from '@components/section'
import { SmallHero } from '@components/small-hero'
import { Meta } from 'src/layout/Meta'
import { ContactVertical } from 'src/templates/Contact'
import 'twin.macro'
import { RegisterSection } from '@components/register-section'
const CustomerService = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={'Fresh Pickle - About Us'} description={''} />
    <div tw="mt-[64px]">
      <SmallHero
        title="We'd love to hear from you"
        imageUrl="/assets/images/hero/1.jpg"
      />
      <Section tw="flex flex-col justify-center py-2xl my-2xl">
        <div tw="flex flex-col md:flex-row justify-center w-full gap-y-lg gap-x-[144px]">
          <ContactVertical
            title="Email"
            description="Our friendly team is here to help."
            cta="customerservice@freshpickle.com"
            icon={<EmailIcon />}
          />
          <ContactVertical
            title="Wholesale"
            description="Become a wholesale partner"
            cta="wholesale@freshpickle.com"
            icon={<DotsIcon />}
          />
        </div>
      </Section>
      <RegisterSection />
    </div>
  </div>
)

export default CustomerService
