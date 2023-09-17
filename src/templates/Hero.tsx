import Section from '@components/section'
import 'twin.macro'
import { HeadingText } from '@components/heading-text'
import Image from 'next/image'
import { BlogPostListFragment } from 'src/generated/graphql'

const Hero = ({ post }: { post: BlogPostListFragment }) => (
  <div tw="w-full h-[75vh]">
    <Section tw="z-10 justify-center items-center flex h-full w-full">
      <div tw="bg-gray-800 rounded-2xl flex h-full p-xl w-full gap-x-xl">
        <div tw="relative w-1/2 h-[400px] shrink-0">
          <Image
            src={post.mainImage?.asset?.url ?? ''}
            alt={post.mainImage?.asset?.altText ?? ''}
            fill
            sizes="25vw"
            style={{
              objectFit: 'cover',
            }}
            tw="rounded-md"
          />
        </div>
        <div tw="flex flex-col justify-center items-center text-center text-white">
          <HeadingText size="display" level={1} tw="">
            {post.title}
          </HeadingText>
        </div>
      </div>
    </Section>
  </div>
)

export { Hero }
