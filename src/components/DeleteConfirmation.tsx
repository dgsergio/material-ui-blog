import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../store/postsSlice';
import { AppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DeleteConfirmation = ({ id }: { id: string }) => {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const userState = useSelector(
    (state: { auth: AuthState }) => state.auth.user
  );
  const navigate = useNavigate();

  const deleteHandler = () => {
    dispatch(deletePost(id, userState!.accessToken));
    navigate('/');
  };

  return (
    <>
      {!showConfirmation ? (
        <IconButton
          aria-label="delete"
          size="large"
          color="secondary"
          onClick={() => setShowConfirmation(true)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      ) : (
        <>
          <IconButton
            aria-label="delete"
            size="large"
            color="error"
            onClick={deleteHandler}
          >
            <CheckIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => setShowConfirmation(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </>
      )}
    </>
  );
};

export default DeleteConfirmation;
