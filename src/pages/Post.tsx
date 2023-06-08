import { Button, Divider, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EditorIcon from '../components/EditorIcon';
import { AppDispatch, deletePost } from '../store';

const Post = () => {
  const { postId } = useParams();
  const posts = useSelector((state: PostsState) => state.posts);
  const post = posts.find((post) => post.id === postId);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = () => {
    dispatch(deletePost(post!.id));
    navigate('/');
  };

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
                    By {post.author} ({post.date})
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
                    <IconButton
                      aria-label="delete"
                      size="large"
                      color="secondary"
                      onClick={deleteHandler}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                </footer>
              </div>
            </div>
          </article>
          <EditorIcon add={false} id={post.id} />
        </>
      )}
    </>
  );
};

export default Post;
