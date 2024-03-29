import Image from 'next/image'
import Link from 'next/link'

import Badge from './Badge'
import Button from './Button'
import Subtitle from './Subtitle'
import { PostCardItemProps } from '../interfaces'

const PostCardItem = ({ post }: PostCardItemProps) => {
  return (
    <Link href="/post/[id]" as={`/post/${post.sys.id}`}>
      <a>
        <div className="bg-primary-white overflow-hidden rounded-md">
          <div className="h-1/2 relative shadow-sm">
            <Image
              src={'https:' + post.fields.postImg.fields.file.url}
              layout="responsive"
              width={385}
              height={285}
              quality={100}
              objectFit={'cover'}
              alt="Post image"
            />
            <div className="absolute left-0 bottom-0">
              <Badge label={post.fields.category} />
            </div>
          </div>
          <div className="h-52 px-4 pt-4 pb-7 flex flex-col justify-between">
            <div className="h-full overflow-hidden">
              <Subtitle boldStyle label={post.fields.title} />
              <div className="mt-3">
                <span>{post.fields.excerpt}</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center mb-2 s:mb-0">
                <Image
                  className="rounded-full"
                  objectFit={'cover'}
                  src={'https:' + post.fields.authorImg.fields.file.url}
                  alt="Profile"
                  width={30}
                  height={30}
                  quality={100}
                />
                <span className="ml-3 font-medium text-sm">
                  {post.fields.authorName}
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">{post.fields.date}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-1/2  transform translate-x-1/2 sm:right-3 sm:transform-none sm:translate-x-0 -bottom-5">
          <Button
            label="Read more"
            path="/post/[id]"
            as={`/post/${post.sys.id}`}
          />
        </div>
      </a>
    </Link>
  )
}

export default PostCardItem
