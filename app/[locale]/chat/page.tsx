import { getDictionary, type Locale } from "@/lib/dictionaries"
import { AppHeader } from "@/components/navigation/app-header"
import { ChatClientView } from "./client-view"

export default async function ChatPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale)
  const pageDict = dict.chatPage

  return (
    <div className="h-screen flex flex-col">
      <AppHeader title={pageDict.title} showBackButton={true} />
      <ChatClientView dict={pageDict} />
    </div>
  )
}
