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

export const PROJECTS: Project[] = [
  {
    name: 'Vireshot',
    description:
      'AI-powered app builder that turns ideas into beautiful fullstack apps using prompts. Inspired by Lovable',
    link: 'https://github.com/yusupscopes/vireshot',
    // NOTE: GitHub OpenGraph CDN dependency. Migrate to local /public/screenshots/
    // if these URLs change or for offline builds.
    image: 'https://opengraph.githubassets.com/1/yusupscopes/vireshot',
    tags: ['TypeScript', 'Next.js', 'AI'],
    id: 'project2',
  },
  {
    name: 'Payrouter',
    description:
      'Unified payment orchestration gateway that routes transactions across multiple payment providers through a single API.',
    link: 'https://github.com/yusupscopes/payrouter',
    // NOTE: GitHub OpenGraph CDN dependency. Migrate to local /public/screenshots/
    // if these URLs change or for offline builds.
    image: 'https://opengraph.githubassets.com/1/yusupscopes/payrouter',
    tags: ['Node.js', 'PostgreSQL', 'Redis'],
    id: 'project1',
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

export const EMAIL = 'yusupmaulana950@gmail.com'
