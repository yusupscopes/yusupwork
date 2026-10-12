import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/app/data'
import { WEBSITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = BLOG_POSTS.filter((post) => post.link.startsWith('/')).map(
    (post) => ({
      url: `${WEBSITE_URL}${post.link}`,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }),
  )

  return [
    {
      url: WEBSITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...posts,
  ]
}
