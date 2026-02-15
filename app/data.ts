type Project = {
  name: string
  description: string
  link: string
  video: string | null
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
    name: 'AvaMeet',
    description:
      'AI-powered video meeting platform that allows humans to talk face-to-face with intelligent virtual assistants.',
    link: 'https://github.com/yusupscopes/AvaMeet',
    video: null,
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
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
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
    link: 'https://www.linkedin.com/in/yusup-work',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/yusupreads',
  },
]

export const EMAIL = 'yusupmaulana950@gmail.com'
