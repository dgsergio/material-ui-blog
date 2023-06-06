import { Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EditorIcon from '../components/EditorIcon';
import { delPost } from '../store';

const Post = () => {
  const { postId } = useParams();
  const posts = useSelector((state: PostsState) => state.posts);
  const post = posts.find((post) => post.id === postId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!post) throw new Error('The post does not exist');

  const deleteHandler = () => {
    console.log(post.id);
    dispatch(delPost(post.id));
    navigate('/');
  };

  return (
    <>
      <article className="post">
        <img src={post.img} alt={post.title} />
        <div className="post-text">
          <div>
            <Typography variant="h4" component="h2">
              {post.title}
            </Typography>

            <Typography component="p">{post.body}</Typography>
          </div>
          <footer>
            <Typography
              component="p"
              fontStyle="italic"
              className="post-categories"
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
      </article>
      <EditorIcon add={false} id={post.id} />
    </>
  );
};

export default Post;
