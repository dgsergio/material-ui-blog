import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import DUMMMY from '../mocks/posts.json';

const PostsList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const transformData = (data: PostTypeAPI[]) => {
    let newData: PostType[] = [];
    for (const item of data) {
      newData.push({
        id: 'p' + item.id,
        title: item.title,
        body: item.body,
        categories: [...item.tags],
        img: 'https://www.sciencenews.org/wp-content/uploads/2021/02/022421_mt_number-generator_feat.jpg',
      });
    }
    setPosts(newData);
  };

  useEffect(() => {
    transformData(DUMMMY.posts);
  }, []);

  return (
    <section className="posts-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostsList;
