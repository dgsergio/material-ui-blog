import { Search } from '@mui/icons-material';
import {
  Container,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

const Header = () => {
  return (
    <header className="header">
      <Typography variant="h3" component="h1">
        Blog
      </Typography>
      <Divider />
      <Container>
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
      </Container>
    </header>
  );
};

export default Header;
