import { useSelector } from 'react-redux';

const Home = () => {
  const counter = useSelector(
    (state: { counter: { value: number } }) => state.counter
  );
  return <div>Home {counter.value}</div>;
};

export default Home;
