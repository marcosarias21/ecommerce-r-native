import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { styles } from '../../../AppStyles';
import { Categories } from '../../components/Categories';
import { Products } from '../../components/Products';
import { Spinner } from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { category } = useSelector((state => state.category));
  console.log(category);
  const { data, isLoading } = useFetch(`https://fakestoreapi.com/products/${category}`);
  console.log(data);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <ScrollView style={styles.container}>
     <Categories />
      { isLoading ? <Spinner />
        : products?.map(product => <><Products key={product.id} {...product} /><Divider /></>)
      }
    </ScrollView>
  );
};

export default Home;
