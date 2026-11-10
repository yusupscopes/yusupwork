type Project = {
  name: string
  description: string
  link: string
  image: string
  tags: string[]
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

// NOTE: Project images depend on the GitHub OpenGraph CDN. Migrate to local
// /public/screenshots/ if these URLs change or for offline builds.
export const PROJECTS: Project[] = [
  {
    name: 'Polka',
    description:
      'Create AI bots that each own a real cloud computer, with a shell, files and a desktop, and chat with them alone or in group chats where they hand work to each other.',
    link: 'https://github.com/yusupscopes/polka',
    image: 'https://opengraph.githubassets.com/1/yusupscopes/polka',
    tags: ['TypeScript', 'AI Agents', 'Multi-agent'],
    id: 'project1',
  },
  {
    name: 'Vireshot',
    description:
      'Build websites by chatting with AI. A coding agent writes a Next.js app in an isolated E2B cloud sandbox, with a live preview and the full source code in your browser.',
    link: 'https://github.com/yusupscopes/vireshot',
    image: 'https://opengraph.githubassets.com/1/yusupscopes/vireshot',
    tags: ['TypeScript', 'Next.js', 'AI'],
    id: 'project2',
  },
  {
    name: 'AvaMeet',
    description:
      'AI video meetings: agents with custom instructions join your calls as a live voice via OpenAI Realtime, then write summaries with timestamped notes.',
    link: 'https://github.com/yusupscopes/AvaMeet',
    image: 'https://opengraph.githubassets.com/1/yusupscopes/AvaMeet',
    tags: ['TypeScript', 'Next.js', 'OpenAI Realtime'],
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kokatto',
    title: 'Senior Software Engineer',
    start: '2021',
    end: '2025',
    link: 'https://yusupwork.com',
    id: 'work2',
  },
  {
    company: 'Kokatto',
    title: 'Junior Software Engineer',
    start: '2019',
    end: '2021',
    link: 'https://yusupwork.com',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/yusupscopes',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/yusupscopes',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yusupwork',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/yusupreads',
  },
]

export const EMAIL = 'hello@yusupmaulana.com'
