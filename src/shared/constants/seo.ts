export const WEB_NAME = 'Veel test task'

export const COMMON_METADATA = {
  title: WEB_NAME,
  description:
    'Implemented CRUD operations, pagination, optimistic updates, and Storybook, using Chud/CN UI, Tailwind CSS, and TanStack.',
  authors: [{ name: 'Daniil' }, { name: 'Daniil', url: 'https://github.com/DaniilBatiuk' }],
  publisher: 'Daniil Batiuk',
  creator: 'Daniil Batiuk',
  image: {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
    width: 1200,
    height: 630,
    alt: 'Logo',
  },
  url: process.env.NEXT_PUBLIC_BASE_URL,
}
