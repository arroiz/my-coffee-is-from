import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Cade Meu Café"
        description="Conheça mais sobre os cafés que você consome."
        canonical="https://cademeucafe.com"
        openGraph={{
          url: 'https://cademeucafe.com',
          title: 'My Trips',
          description: 'Conheça mais sobre os cafés que você consome.',
          images: [
            {
              url: 'https://cademeucafe.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'Cade Meu Café'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
