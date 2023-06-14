import { useDispatch, useSelector } from 'react-redux';
import { Container, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AppDispatch } from '../store';
import { logOut } from '../store/authSlice';
import PostsList from '../components/PostsList';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector(
    (state: { posts: { posts: PostType[] } }) => state.posts.posts
  );
  const userState = useSelector(
    (state: { auth: AuthState }) => state.auth.user
  );
  const userPosts = posts.filter((post) => post.author.id === userState!.id);
  return (
    <>
      <Container maxWidth="lg" className="profile" sx={{ display: 'flex' }}>
        <div className="profile-content">
          <img
            className="profile-content-image"
            src={userState!.imgUrl || '/img/no-img.gif'}
            alt={'profile picture'}
          />
          <div className="profile-content-info">
            <Typography variant="h6" component="h2">
              {userState!.name}
            </Typography>
            <Typography component="p">{userState!.email}</Typography>
            <button onClick={() => dispatch(logOut())}>( Log-out )</button>
          </div>
        </div>
        <IconButton color="primary" onClick={() => navigate('/')}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Container>
      {userPosts.length > 0 && (
        <>
          <Typography variant="h6" component="h3">
            My contributions
          </Typography>
          <PostsList posts={userPosts} />
        </>
      )}
    </>
  );
};
