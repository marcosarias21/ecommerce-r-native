import { Button, List } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../app/categorySlice';
import { categoryData } from '../../helper/categoryData';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <List.Section>
      <List.Accordion title="Categories" >
           {categoryData?.map(categorie => <Button key={categorie.id} mode="outlined" style={{ borderRadius: 0 }}
            onPress={() => dispatch(setCategory(categorie.category))}> {categorie.name} </Button>) }
      </List.Accordion>
    </List.Section>
  );
};

export default Categories;
