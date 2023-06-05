import PostCard from './PostCard';

const PostsList = ({ posts }: { posts: PostType[] }) => {
  return (
    <section className="posts-list">
      {posts.length > 0 &&
        posts.map((post) => <PostCard key={post.id} post={post} />).reverse()}
    </section>
  );
};

export default PostsList;
