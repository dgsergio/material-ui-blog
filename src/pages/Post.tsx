import { Button, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import EditorIcon from '../components/EditorIcon';
import DeleteConfirmation from '../components/DeleteConfirmation';

const Post = () => {
  const { postId } = useParams();
  const userState = useSelector(
    (state: { auth: AuthState }) => state.auth.user
  );
  const posts = useSelector(
    (state: { posts: PostsState }) => state.posts.posts
  );
  const post = posts.find((post) => post.id === postId);

  return (
    <>
      {!post ? (
        <div className="status-message">Page not found</div>
      ) : (
        <>
          <article className="post">
            <Typography variant="h4" component="h2">
              {post.title}
            </Typography>
            <div className="post-container">
              <img src={post.img} alt={post.title} />
              <div className="post-text">
                <div>
                  <Typography component="p" className="post-body">
                    {post.body}
                  </Typography>
                  <Typography
                    component="p"
                    className="post-info"
                    fontStyle="italic"
                    color="text.secondary"
                  >
                    By {post.author.name} ({post.date})
                  </Typography>
                </div>
                <Divider />
                <footer>
                  <Typography
                    component="p"
                    fontStyle="italic"
                    className="post-categories"
                    color="text.secondary"
                  >
                    {post.categories.join(', ')}
                  </Typography>
                  <div className="post-footer-btns">
                    <Button size="small">
                      <Link to="/">&#x21D0; Back</Link>
                    </Button>
                    {userState &&
                      (userState.id === post.author.id ||
                        userState.id === import.meta.env.VITE_ADMIN_ID) && (
                        <DeleteConfirmation id={post.id} />
                      )}
                  </div>
                </footer>
              </div>
            </div>
          </article>
          {userState &&
            (userState.id === post.author.id ||
              userState.id === import.meta.env.VITE_ADMIN_ID) && (
              <EditorIcon add={false} id={post.id} />
            )}
        </>
      )}
    </>
  );
};

export default Post;
