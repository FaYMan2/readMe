import axios from "axios";
import { Metadata } from "next";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SERVER_ADDR } from "@/app/utils/atom";

interface BlogData {
    title: string;
    content: string;
    createdAt: string;
}

async function fetchBlogData(id: string): Promise<BlogData | null> {
    try {
        const response = await axios.get(`${SERVER_ADDR}/api/posts/${id}`);
        console.log(response)
        return response.data;
    } catch {
        return null;
    }
}

export async function generateMetadata({ id }: { id: string  }): Promise<Metadata> {
    const blogData = await fetchBlogData(id);
    return {
        title: blogData?.title || "Blog Post",
        description: blogData?.content.slice(0, 150) || "Read the latest blog post.",
    };  
}

export default async function BlogPost({ params } : {params : {slug : string}}) {
    const blogData = await fetchBlogData(params.slug);

    if (!blogData) {
        return <p className="text-red-500">Failed to load blog post</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold">{blogData.title}</h1>
            <p className="text-gray-500 text-sm">{new Date(blogData.createdAt).toLocaleString().split(',')[0]}</p>
            <div className="prose prose-neutral dark:prose-invert mt-4">
                <Markdown remarkPlugins={[remarkGfm]}>{blogData.content}</Markdown>
            </div>
        </div>
    );
}