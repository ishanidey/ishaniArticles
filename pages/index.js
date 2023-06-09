import { FeaturedPosts, Poster, SearchBar } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <>
      <Poster />
      <SearchBar />
      <div className=" mx-auto px-10 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            <div className="grid grid-cols-2 gap-4">
              {posts.map((post, index) => (
                <>
                  <PostCard key={index} post={post.node} />
                </>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 col-span-2">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
