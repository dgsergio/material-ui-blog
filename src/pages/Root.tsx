import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/material';

function Root() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Root;
