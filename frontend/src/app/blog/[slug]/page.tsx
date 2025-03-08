import BlogPost from "@/components/BlogPost";

export default function Page({params} : {params : {slug : string}}){
    return (<>
            <BlogPost params={params}/>
        </>
    );
}