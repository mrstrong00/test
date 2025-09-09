import FileUpload from "@/components/FileUpload"
import { generateId } from "ai"
import { getModels } from "@/lib/config/models"
import { Chat } from "@/components/chat"

export default async function Page() {
  const id = generateId()
  const models = await getModels()

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Title */}
      <h1 className="text-2xl font-[Georgia] font-bold text-center">Infinity</h1>

      {/* File Upload Section */}
      <FileUpload />

      {/* Chat Section */}
      <Chat id={id} models={models} />
    </div>
  )
}
