import NavCategory from '../components/NavCategory';
import PostsList from '../components/PostsList';
import EditorIcon from '../components/EditorIcon';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { categoryId } = useParams();
  const posts = useSelector((state: PostsState) => state.posts);
  const searchedPosts = useSelector((state: PostsState) => state.searchedPosts);

  let postsFiltered: PostType[] = [];
  if (categoryId) {
    let query =
      categoryId === 'artificial-intelligence'
        ? 'A.I.'
        : categoryId!.charAt(0).toUpperCase() + categoryId!.slice(1);
    postsFiltered = posts.filter((post) =>
      post.categories.includes(query as Categories)
    );
    if (postsFiltered.length < 1) throw new Error('The post does not exist');
  }
  return (
    <>
      {searchedPosts && searchedPosts.length < 1 && (
        <div className="message">No posts were found</div>
      )}
      {searchedPosts ? (
        <PostsList posts={searchedPosts} />
      ) : (
        <>
          <NavCategory />
          <PostsList posts={postsFiltered.length > 0 ? postsFiltered : posts} />
        </>
      )}
      <EditorIcon add={true} />
    </>
  );
};

export default Home;
