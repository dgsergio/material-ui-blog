import { Search } from '@mui/icons-material';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import {
  Button,
  Container,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetSearch, searchPosts } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const searchedPosts = useSelector((state: PostsState) => state.searchedPosts);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    dispatch(searchPosts(query));
  };

  const resetSearchHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);
    dispatch(resetSearch());
  };

  return (
    <header className="header">
      <Typography variant="h3" component="h1">
        <Link to="/">Blog</Link>
      </Typography>
      <Container maxWidth="md" className="search-field">
        <TextField
          onChange={changeHandler}
          id="outlined-basic"
          fullWidth
          label="Search"
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!searchedPosts ? (
                  <Search />
                ) : (
                  <Button onClick={resetSearchHandler}>
                    <BackspaceOutlinedIcon fontSize="small" />
                  </Button>
                )}
              </InputAdornment>
            ),
          }}
        />
      </Container>
      <Divider />
    </header>
  );
};

export default Header;
