import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, getPosts } from '../store';
let firstTime = true;

function Root() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: PostsState) => state.status);

  const transformData = async (data: PostTypeAPI) => {
    const thedata = await data;
    const newData: PostType[] = [];
    for (const item in thedata) {
      newData.push({
        id: item,
        ...thedata[item],
      });
    }
    return newData;
  };

  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    dispatch(getPosts(transformData));
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {loading && <div className="status-message">Loading...</div>}
        {error && <div className="status-message">{error}</div>}
        {!loading && !error && <Outlet />}
      </Container>
      <Footer />
    </>
  );
}

export default Root;
