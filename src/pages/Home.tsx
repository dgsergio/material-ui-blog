import { Container } from '@mui/material';
import Header from '../components/Header';
import NavCategory from '../components/NavCategory';
import PostsList from '../components/PostsList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <NavCategory />
        <PostsList />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
