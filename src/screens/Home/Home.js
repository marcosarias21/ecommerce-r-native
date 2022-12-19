import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Products } from '../../components/Products';
import { Spinner } from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { data, isLoading } = useFetch('https://fakestoreapi.com/products');
  console.log(data);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <ScrollView>
    { isLoading ? <Spinner />
      : products?.map(product => <Products key={product.id} {...product} />)
    }
    </ScrollView>
  );
};

export default Home;
