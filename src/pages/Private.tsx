import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { SignIn } from '../components/SignIn';

const Private = () => {
  const userState = useSelector(
    (state: { auth: { user: UserType } }) => state.auth.user
  );
  return <>{userState ? <Outlet /> : <SignIn />}</>;
};

export default Private;
