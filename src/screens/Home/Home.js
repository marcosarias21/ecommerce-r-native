import { View } from 'react-native';
import { Products } from '../../components/Products';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data } = useFetch('https://fakestoreapi.com/products');
  console.log(data);
  return (
    <>
      <Products />
    </>
  );
};

export default Home;
