import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('IndexPage')
  console.log(t('title'))
  return (
    <div className="max-sm:p-4">
      <h1 className="text-4xl mb-4 font-semibold capitalize"> {t('title')} </h1>
      <p className="text-justify"> {t('description')} </p>
    </div>
  );
}
