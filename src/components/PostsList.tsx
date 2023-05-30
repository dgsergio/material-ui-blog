import PostCard from './PostCard';
import { useSelector } from 'react-redux';

const PostsList = () => {
  const posts = useSelector((state: PostsState) => state.posts);

  return (
    <section className="posts-list">
      {posts.length > 0 &&
        posts.map((post) => <PostCard key={post.id} post={post} />).reverse()}
    </section>
  );
};

export default PostsList;
