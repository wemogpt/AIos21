import { getDictionary, type Locale } from "@/lib/dictionaries"
import { AppHeader } from "@/components/navigation/app-header"

export default async function FeedbackPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale)
  const pageDict = dict.feedbackComponentsPage

  return (
    <div className="min-h-screen pb-32">
      <AppHeader title={pageDict.title} showBackButton />
      <main className="px-4 text-center pt-32">
        <p className="text-gray-500">{pageDict.comingSoon}</p>
      </main>
    </div>
  )
}
