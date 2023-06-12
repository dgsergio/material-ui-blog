import { Search } from '@mui/icons-material';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { Container, InputAdornment, TextField } from '@mui/material';
import { resetSearch, searchPosts } from '../store/postsSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchInput = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState<string>('');
  const searchedPosts = useSelector(
    (state: { posts: PostsState }) => state.posts.searchedPosts
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchValue(query);
    dispatch(searchPosts(query));
  };

  const resetSearchHandler = () => {
    setSearchValue('');
    dispatch(resetSearch());
  };

  return (
    <Container maxWidth="md" className="search-field">
      <TextField
        onChange={changeHandler}
        id="outlined-basic"
        value={searchValue}
        fullWidth
        label="Search"
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!searchedPosts ? (
                <Search />
              ) : (
                <BackspaceOutlinedIcon
                  fontSize="small"
                  className="header-reset-icon"
                  color="primary"
                  onClick={resetSearchHandler}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default SearchInput;
