import { getDictionary, type Locale } from "@/lib/dictionaries"
import { CardComponentsClientView } from "./client-view"
import { AppHeader } from "@/components/navigation/app-header"

export default async function CardComponentsPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale)
  const pageDict = dict.cardComponentsPage

  return (
    <div className="min-h-screen pb-32">
      <AppHeader title={pageDict.title} showBackButton />
      <div className="pt-16">
        <CardComponentsClientView dict={pageDict} />
      </div>
    </div>
  )
}
