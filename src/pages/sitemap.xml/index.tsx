import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  const portuguesePages = places.map(({ slug }) => ({
    loc: `https://mycoffeeisfrom.com/place/${slug}`,
    lastmod: new Date().toISOString()
  }))

  const englishPages = places.map(({ slug }) => ({
    loc: `https://mycoffeeisfrom.com/en/place/${slug}`,
    lastmod: new Date().toISOString()
  }))

  const staticPages = [
    {
      loc: `https://mycoffeeisfrom.com/`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `https://mycoffeeisfrom.com/about`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `https://mycoffeeisfrom.com/en`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `https://mycoffeeisfrom.com/en/about`,
      lastmod: new Date().toISOString()
    }
  ]

  const pages = [...staticPages, ...portuguesePages, ...englishPages]

  return getServerSideSitemap(ctx, pages)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
