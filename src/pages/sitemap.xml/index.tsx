import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  const pages = places.map(({ slug }) => ({
    loc: `https://mycoffeeisfrom.com/place/${slug}`,
    lastmod: new Date().toISOString()
  }))

  pages.push(
    {
      loc: `https://mycoffeeisfrom.com/`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `https://mycoffeeisfrom.com/about`,
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, pages)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
