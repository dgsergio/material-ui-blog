import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Link to="/" className="footer-home">
          Blog © 2023
        </Link>
      </Container>
      <Container>
        A{' '}
        <a href="http://pixel40.com.ar" target="_blank">
          Pixel40
        </a>{' '}
        development.
      </Container>
    </footer>
  );
};

export default Footer;
