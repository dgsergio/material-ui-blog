import { useState, useEffect } from 'react';
import Alert from '@mui/joy/Alert';
import { Container, Typography } from '@mui/material';
import { auth } from '../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { loadUser, signIn } from '../store/authSlice';
import WarningIcon from '@mui/icons-material/Warning';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const userState = useSelector(
    (state: { auth: AuthState }) => state.auth.user
  );
  const status = useSelector((state: { auth: AuthState }) => state.auth.status);
  const open = Boolean(anchorEl);
  const dispatch: AppDispatch = useDispatch();

  const userDispatcher = async (user: User) => {
    dispatch(
      loadUser({
        id: user.uid,
        email: user.email!,
        imgUrl: user.photoURL,
        name: user.displayName!,
        accessToken: await user.getIdToken(),
      })
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        userDispatcher(user);
      } else {
        dispatch(loadUser(undefined));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signinHandler = () => {
    setAnchorEl(null);
    dispatch(signIn());
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex' }}
        className="topbar-container"
      >
        {!status.loading && status.error && (
          <Alert
            startDecorator={<WarningIcon fontSize="small" />}
            variant="plain"
            sx={{ mr: 1 }}
            size="sm"
            color="danger"
          >
            <Typography color="danger" fontWeight="md" fontSize="0.9rem">
              {status.error}
            </Typography>
          </Alert>
        )}
        {status.loading && <div className="spinner"></div>}

        {!userState ? (
          <LoggedOut onSigninHandler={signinHandler} />
        ) : (
          <LoggedIn
            userState={userState}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            open={open}
          />
        )}
      </Container>
    </>
  );
};

export default TopBar;
