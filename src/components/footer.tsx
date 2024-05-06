import { useTranslations } from "next-intl"

const Footer = () => {
    const t = useTranslations('Footer')
  return (
    <div className="my-10 text-center">
        <p> {t('copyright')} </p>
    </div>
  )
}

export default Footer