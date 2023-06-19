import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const initialState: AuthState = {
  user: undefined,
  status: { loading: false, error: '' },
};

const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    loadUser(state, action: PayloadAction<UserType | undefined>) {
      state.user = action.payload;
    },
    authStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const signIn = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(authStatus({ loading: true, error: '' }));
      auth;
      const result = await signInWithPopup(auth, provider);
      const userLogged: UserType = {
        id: result.user.uid,
        email: result.user.email!,
        imgUrl: result.user.photoURL,
        name: result.user.displayName!,
        accessToken: await result.user.getIdToken(),
      };
      dispatch(loadUser(userLogged));
      dispatch(authStatus({ loading: false, error: '' }));
    } catch (err: any) {
      if (err.code) dispatch(authStatus({ loading: false, error: '' }));
      else
        dispatch(
          authStatus({ loading: false, error: 'Fail to sign in: ' + err })
        );
    }
  };
};

export const logOut = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(authStatus({ loading: true, error: '' }));
      await signOut(auth);
      dispatch(loadUser(undefined));
      dispatch(authStatus({ loading: false, error: '' }));
    } catch (err) {
      dispatch(
        authStatus({ loading: false, error: 'Fail to sign out: ' + err })
      );
    }
  };
};

export const { loadUser, authStatus } = authSlice.actions;

export default authSlice.reducer;
