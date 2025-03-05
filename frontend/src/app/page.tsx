import ArticleCard from '../components/ArticleCard'
import HomeStyle from '@/components/HomeComp';
const dummyPosts = [
  {
    id: 1,
    title: "A Thoughtful Perspective on Modern Living",
    excerpt: "Exploring the intricacies of how technology and society intertwine.",
    author: "Jane Doe",
    readTime: "5 min",
    avatar: "/images/avatar-placeholder.png"
  },
  {
    id: 2,
    title: "Understanding Minimalism in a Busy World",
    excerpt: "A deep dive into how less truly can be more.",
    author: "John Smith",
    readTime: "3 min",
    avatar: "/images/avatar-placeholder.png"
  }
];

export default function HomePage() {
  return (
    <main className="px-4 py-8 max-w-3xl mx-auto">
      {/* Hero Section */}
      <div className='py-8 mb-6 flex allign-center justify-center'>
        <HomeStyle/>
      </div>
      
      <section className="space-y-8">
        {dummyPosts.map(post => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}
