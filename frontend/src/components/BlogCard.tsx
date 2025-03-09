import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
interface Post {
  title: string;
  wordCount: number;
  id: string;
  imageUrl?: string;
}

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const readTime = Math.ceil(post.wordCount / 200);
  
  return (
    <Link href={`/blog/${post.id}`} className="block h-full">
      <Card className="h-full overflow-hidden border border-white/10 bg-black hover:bg-[#121111] transition-all duration-300 hover:shadow-md hover:scale-105">
        {post.imageUrl && (
          <div className="w-full h-40 overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <CardHeader className="p-4 pb-0">
          <h3 className="text-xl font-bold font-header text-white line-clamp-2">{post.title}</h3>
        </CardHeader>
        
        <CardContent className="p-4 pt-2">
          {/* content preview here if needed */}
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-400">
            <Clock className="h-3 w-3 mr-1" />
            <span>{readTime} min read</span>
          </div>
          
          <Badge variant="outline" className="text-xs bg-transparent border-white/20 text-white/70">
            Article
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default BlogCard;