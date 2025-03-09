import axios from "axios"
import type { Metadata } from "next"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { SERVER_ADDR } from "@/app/utils/atom"
import { CalendarIcon, Clock } from "lucide-react"

interface BlogData {
  title: string
  content: string
  createdAt: string
  imageURL : string
}

async function fetchBlogData(id: string): Promise<BlogData | null> {
  try {
    const response = await axios.get(`${SERVER_ADDR}/api/posts/${id}`)
    return response.data
  } catch {
    return null
  }
}

export async function generateMetadata({ id }: { id: string }): Promise<Metadata> {
  const blogData = await fetchBlogData(id)
  return {
    title: blogData?.title || "Blog Post",
    description: blogData?.content.slice(0, 150) || "Read the latest blog post.",
  }
}

function getReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blogData = await fetchBlogData(params.slug)

  if (!blogData) {
    return (
      <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
        <p className="font-medium">Failed to load blog post</p>
        <p className="text-sm mt-1">The requested article could not be found or is unavailable.</p>
      </div>
    )
  }

  const readingTime = getReadingTime(blogData.content)
  const formattedDate = new Date(blogData.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="bg-card rounded-lg shadow-sm p-6 border">
      <img src={blogData.imageURL} className="mx-auto mb-8" alt="Blog Image" />
      <h1 className="text-3xl font-bold tracking-tight mb-2">{blogData.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-1">
          <CalendarIcon size={16} />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{readingTime} min read</span>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <Markdown remarkPlugins={[remarkGfm]}>{blogData.content}</Markdown>
      </div>
    </article>
  )
}

