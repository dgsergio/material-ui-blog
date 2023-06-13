import { Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { logOut } from '../store/authSlice';
import PostsList from '../components/PostsList';

export const Profile = () => {
  const dispatch: AppDispatch = useDispatch();

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
        <img
          className="profile-image"
          src={userState!.imgUrl || '/img/no-img.gif'}
          alt={'profile picture'}
        />
        <div className="profile-info">
          <Typography variant="h6" component="h2">
            {userState!.name}
          </Typography>
          <Typography component="p">{userState!.email}</Typography>
          <button onClick={() => dispatch(logOut())}>( Log-out )</button>
        </div>
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
