import Image from 'next/image'
import React from 'react'

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  avatar: string;
}

interface ArticleCardProps {
  post: Post;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <div className="p-6 bg-white dark:bg-black border-2 border-white dark:border-gray-700 rounded transition transform hover:scale-105 hover:shadow-sm">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 mr-4 hidden sm:block">
          <Image src={post.avatar} alt={post.author} width={40} height={40} className="rounded-full" />
        </div>
        <span className="meta text-sm">{post.author}</span>
      </div>
      <h3 className="text-xl font-bold font-header dark:text-white line-clamp-3">{post.title}</h3>
      <p className="mt-2 text-base text-gray-700 dark:text-gray-300 line-clamp-2">{post.excerpt}</p>
      <div className="mt-4 flex justify-between items-center">
        {/*<button className="text-xl hover:opacity-80 transition duration-200">💚</button>*/}
        <span className="meta text-sm">{post.readTime}</span>
      </div>
      <hr className="mt-4 border-gray-200 dark:border-gray-700" />
    </div>
  )
}

export default ArticleCard
