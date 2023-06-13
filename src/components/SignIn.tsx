import { Typography } from '@mui/material';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { signIn } from '../store/authSlice';

export const SignIn = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="signin">
      <Typography variant="h5" component="h2">
        Please Sign-in
      </Typography>
      <Typography component="p">
        In order to access this content you must be logged in with a Google
        account. Please sign in using the following link:
      </Typography>

      <GoogleButton
        className="signin-google"
        onClick={() => dispatch(signIn())}
      />
    </div>
  );
};
