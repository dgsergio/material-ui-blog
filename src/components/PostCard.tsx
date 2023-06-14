import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const PostCard = ({ post }: { post: PostType }) => {
  const shortenBody: string =
    post.body.split(' ').length < 22
      ? post.body
      : post.body.split(' ', 20).join(' ') + '...';

  return (
    <Card
      className="card"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-once="true"
    >
      <CardMedia sx={{ height: 140 }} image={post.img} title={post.title} />
      <CardContent>
        <Typography
          className="card-info"
          component="p"
          fontStyle={'italic'}
          color="text.secondary"
        >
          {post.author.name} ({post.date})
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortenBody}
        </Typography>
      </CardContent>
      <CardActions className="card-footer-btns">
        <Typography
          className="card-categories"
          component="p"
          fontStyle={'italic'}
          color="text.secondary"
        >
          {post.categories.join(', ')}
        </Typography>
        <Button size="small">
          <Link to={'/' + post.id}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
