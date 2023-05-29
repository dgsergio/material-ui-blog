import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const PostCard = ({ post }: { post: PostType }) => {
  const shortenBody: string =
    post.body.split(' ').length < 22
      ? post.body
      : post.body.split(' ', 20).join(' ') + '...';

  console.log(post.title + ': ' + post.body.split(' ').length);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={post.img} title={post.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortenBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={post.id}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
