import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import SearchInput from './SearchInput';
import TopBar from './TopBar';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <TopBar />
      <Typography variant="h3" component="h1">
        <Link to="/">Blog</Link>
      </Typography>
      {location.pathname === '/' && <SearchInput />}
      <Divider />
    </header>
  );
};

export default Header;
