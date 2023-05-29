import { Typography } from '@mui/material';

const Post = () => {
  return (
    <article className="post">
      <img src="https://www.sciencenews.org/wp-content/uploads/2021/02/022421_mt_number-generator_feat.jpg" />
      <div className="post-text">
        <div>
          <Typography variant="h4" component="h2">
            Lizard
          </Typography>

          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </div>
        <footer>
          <Typography component="p" fontStyle="italic">
            category 1, category2, category 3
          </Typography>
        </footer>
      </div>
    </article>
  );
};

export default Post;
