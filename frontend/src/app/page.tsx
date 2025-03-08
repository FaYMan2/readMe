import ArticleCard from '../components/ArticleCard';
import HomeStyle from '@/components/HomeComp';
import { SERVER_ADDR } from './utils/atom';

async function getPosts() {
  const res = await fetch(`${SERVER_ADDR}/api/posts/random`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  console.log(res.json)
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="px-4 py-8 max-w-3xl mx-auto">
      <div className="py-8 mb-6 flex align-center justify-center">
        <HomeStyle />
      </div>

      <section>
        {posts.map((post: { title: string; wordCount: number;id : string }, index: number) => (
          <ArticleCard key={index} post={post} />
        ))}
      </section>
    </main>
  );
}
