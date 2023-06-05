import NavCategory from '../components/NavCategory';
import PostsList from '../components/PostsList';
import EditorIcon from '../components/EditorIcon';

const Home = () => {
  return (
    <>
      <NavCategory />
      <PostsList />
      <EditorIcon add={true} />
    </>
  );
};

export default Home;
