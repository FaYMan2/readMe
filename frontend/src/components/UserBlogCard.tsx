import { BlogCardProps } from "@/app/utils/types";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
    
const UserBlogCard = ({BlogProps} : {BlogProps : BlogCardProps}) => {
    const {title, content } = BlogProps;
    const formattedDate = new Date(BlogProps.createdAt).toLocaleDateString();   
  
    return (
        <div className="p-6 bg-white dark:bg-[#070707] border-1 border-white dark:border-gray-700 rounded hover:shadow-md">
          <h3 className="text-xl font-bold font-header dark:text-white line-clamp-3">{title}</h3>
          <p className="mt-2 text-base text-gray-700 dark:text-gray-300 line-clamp-2">
            <Markdown remarkPlugins={[remarkGfm]}>
                {content}
            </Markdown>
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="meta text-sm">{formattedDate}</span>
          </div>
          <hr className="mt-4 border-gray-200 dark:border-gray-700" />
        </div>
    );
};  

export default UserBlogCard;
