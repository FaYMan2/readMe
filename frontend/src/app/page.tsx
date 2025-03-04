import ArticleCard from '../components/ArticleCard'

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
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold font-header">Stories Worth Sharing</h1>
        <p className="mt-4 text-lg text-accent.gray">
          Thoughtful perspectives from our community
        </p>
      </section>

      {/* Posts Grid (Single column layout) */}
      <section className="space-y-8">
        {dummyPosts.map(post => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}
