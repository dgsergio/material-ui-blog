import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import EditorIcon from '../components/EditorIcon';

const Post = () => {
  const { postId } = useParams();
  const posts = useSelector((state: PostsState) => state.posts);
  const post = posts.find((post) => post.id === postId);

  if (!post) throw new Error('The post does not exist');

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
            <Typography component="p" fontStyle="italic">
              {post.categories.join(', ')}
            </Typography>
            <Button size="small">
              <Link to="/">&#x21D0; Back</Link>
            </Button>
          </footer>
        </div>
      </article>
      <EditorIcon add={false} id={post.id} />
    </>
  );
};

export default Post;
