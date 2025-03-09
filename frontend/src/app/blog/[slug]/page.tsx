import BlogPost from "@/components/BlogPost"
import TTScomponent from "@/components/TtsComp"

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <BlogPost params={params} />
        </div>

        <div className="lg:sticky lg:top-8 self-start">
          <div className="bg-card rounded-lg shadow-sm p-4 border">
            <h3 className="text-lg font-medium mb-3">Audio Version</h3>
            <TTScomponent params={{ id: params.slug }} />
          </div>
        </div>
      </div>
    </div>
  )
}

