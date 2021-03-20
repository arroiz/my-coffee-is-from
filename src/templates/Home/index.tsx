import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import LocaleSelector from 'components/LocaleSelector'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Coffee Is From"
        description="Conheça mais sobre os cafés que você consome."
        canonical="https://mycoffeeisfrom.com"
        openGraph={{
          url: 'https://mycoffeeisfrom.com',
          title: 'My Coffee Is From',
          description: 'Conheça mais sobre os cafés que você consome.',
          images: [
            {
              url: 'https://mycoffeeisfrom.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Coffee Is From'
            }
          ],
          site_name: 'My Coffee Is From'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <LocaleSelector />
      <Map places={places} />
    </>
  )
}
