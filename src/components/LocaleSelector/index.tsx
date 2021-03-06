import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'

const LocaleSelector = () => {
  const router = useRouter()
  const isEnglishLocale = router.locale === 'en'

  return (
    <S.Wrapper>
      <Link href="/" locale={isEnglishLocale ? 'pt-BR' : 'en'}>
        {isEnglishLocale ? 'π§π·' : 'πΊπΈ'}
      </Link>
    </S.Wrapper>
  )
}

export default LocaleSelector
