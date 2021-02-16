import Image from 'next/image'
import { GetStaticProps } from 'next'

import Subtitle from '../components/Subtitle'
import SocialItems from '../components/SocialItems'
import PostCardList from '../components/PostCardList'
import Title from '../components/Title'
import ButtonScroll from '../components/ButtonScroll'
import Meta from '../components/Meta'

// contentful
const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFULL_ACCESS_TOKEN,
})

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getEntries({
    content_type: 'post',
    revalidate: 1,
  })

  return {
    props: {
      posts: data.items,
    },
  }
}
interface HomeProps {
  posts: any
}

export default function Home({ posts }: HomeProps) {
  console.log(posts)

  return (
    <>
      <Meta
        title="ProBlog App | Home"
        description="Home page"
        keywords="latest posts"
      />
      <section className="h-screen">
        <div className="container h-full flex flex-col justify-evenly ">
          <div className="w-full relative">
            <div className="flex flex-col w-4/5 m-auto sm:w-1/2 md:w-full md:m-0 items-center md:items-start z-20">
              <h1 className="text-primary-black text-center md:text-left font-bold text-4xl mb-3">
                Welcome to <span className="text-primary-black">Pro</span>
                <span className="text-primary-red">Blog</span> web app
              </h1>
              <div className="mb-8 text-center md:text-left">
                <Subtitle label="Here you can find and read posts on the most popular topics." />
              </div>
              <div className="mb-5">
                <ButtonScroll label="Latest Posts" path="/latest-posts" />
              </div>
            </div>
            <div className="absolute z-10 top-0 right-0 invisible lg:visible">
              <Image
                src="/home-img.svg"
                alt="Read blog image"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="flex z-20 justify-center md:justify-start">
            <SocialItems />
          </div>
        </div>
      </section>
      <section id="/latest-posts" className="min-h-screen relative">
        <div className="container pt-20 pb-40 ">
          <div className="mb-7">
            <Title label="Latest Posts." />
          </div>
          <PostCardList posts={posts} />
        </div>
      </section>
    </>
  )
}
