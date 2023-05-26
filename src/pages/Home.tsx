import { Search } from '@mui/icons-material';
import { InputAdornment, TextField, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Typography variant="h3" component="h1">
            Blog
          </Typography>
        </div>
        <div className="search">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Search"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Home;
