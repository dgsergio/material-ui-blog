import NavCategory from '../components/NavCategory';
import PostsList from '../components/PostsList';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavCategory />
      <PostsList />
      <div className="add-icon">
        <Fab
          size="large"
          color="primary"
          aria-label="add"
          onClick={() => navigate('/editor')}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};

export default Home;
