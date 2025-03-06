import React from 'react';

interface Post {
  title: string;
  wordCount: number;
}

interface ArticleCardProps {
  post: Post;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <div className="p-6 bg-white dark:bg-black border-2 border-white dark:border-gray-700 rounded transition transform hover:scale-105 hover:shadow-sm">
      <h3 className="text-xl font-bold font-header dark:text-white line-clamp-3">{post.title}</h3>
      <p className="mt-2 text-base text-gray-700 dark:text-gray-300 line-clamp-2">
        {post.wordCount} words
      </p>
      <div className="mt-4 flex justify-between items-center">
        <span className="meta text-sm">~ {Math.ceil(post.wordCount / 200)} min read</span>
      </div>
      <hr className="mt-4 border-gray-200 dark:border-gray-700" />
    </div>
  );
};

export default ArticleCard;
