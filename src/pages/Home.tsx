import NavCategory from '../components/NavCategory';
import PostsList from '../components/PostsList';
import EditorIcon from '../components/EditorIcon';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { categoryId } = useParams();
  const userState = useSelector(
    (state: { auth: AuthState }) => state.auth.user
  );
  const posts = useSelector(
    (state: { posts: PostsState }) => state.posts.posts
  );
  const searchedPosts = useSelector(
    (state: { posts: PostsState }) => state.posts.searchedPosts
  );
  let postsFiltered: PostType[] = [];

  if (categoryId) {
    let query =
      categoryId === 'artificial-intelligence'
        ? 'A.I.'
        : categoryId!.charAt(0).toUpperCase() + categoryId!.slice(1);
    postsFiltered = posts.filter((post) =>
      post.categories.includes(query as Categories)
    );
  }

  return (
    <>
      {categoryId && postsFiltered.length < 1 ? (
        <div className="status-message">Page not found</div>
      ) : (
        <>
          {searchedPosts && searchedPosts.length < 1 && (
            <div className="message">No posts were found</div>
          )}
          {searchedPosts ? (
            <PostsList posts={searchedPosts} />
          ) : (
            <>
              <NavCategory />
              <PostsList
                posts={postsFiltered.length > 0 ? postsFiltered : posts}
              />
            </>
          )}

          {userState && <EditorIcon add={true} />}
        </>
      )}
    </>
  );
};

export default Home;
