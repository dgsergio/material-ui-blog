import { Button, ButtonGroup } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const NavCategory = () => {
  const posts = useSelector(
    (state: { posts: PostsState }) => state.posts.posts
  );
  const navigate = useNavigate();
  const { categoryId } = useParams();
  let categoryName = '';
  if (categoryId) {
    categoryName =
      categoryId === 'artificial-intelligence'
        ? 'A.I.'
        : categoryId!.charAt(0).toUpperCase() + categoryId!.slice(1);
  }

  let AvailableCategories: Categories[] = [];
  for (const post of posts) {
    for (const category of post.categories) {
      if (!AvailableCategories.includes(category)) {
        AvailableCategories.push(category);
      }
    }
  }

  const navigateHandlder = (category: Categories) => {
    if (categoryName !== category) {
      const categoryURL =
        category === 'A.I.' ? 'artificial-intelligence' : category;
      navigate('/category/' + categoryURL.toLowerCase());
    } else {
      navigate('/');
    }
  };

  return (
    <div className="categories">
      <ButtonGroup
        className="categories-btns"
        variant="text"
        aria-label="outlined primary button group"
        size="small"
      >
        {AvailableCategories.map((category) => (
          <Button
            variant={categoryName === category ? 'contained' : 'text'}
            key={category}
            onClick={() => navigateHandlder(category)}
            title={
              categoryName === category ? 'click again to unselect it' : ''
            }
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default NavCategory;
