import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import { styles } from '../../../AppStyles';
import { Categories } from '../../components/Categories';
import { Products } from '../../components/Products';
import { Spinner } from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();
  console.log(category);
  const { data, isLoading } = useFetch('https://fakestoreapi.com/products');
  console.log(data);
  console.log(products);
  const getDataFilter = () => {
    const categoryFilterBy = data?.filter(product => product.category === category);
    setProducts(categoryFilterBy);
  };

  useEffect(() => {
    setProducts(data);
  }, [data]);
  useEffect(() => {
    getDataFilter();
  }, [category]);

  return (
    <ScrollView style={styles.container}>
     <Categories setCategory={setCategory} />
      { isLoading ? <Spinner />
        : products?.map(product => <><Products key={product.id} {...product} /><Divider /></>)
      }
    </ScrollView>
  );
};

export default Home;
