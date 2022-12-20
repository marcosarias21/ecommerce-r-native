import { Button, List } from 'react-native-paper';
import { categoryData } from '../../helper/categoryData';

const Categories = ({ setCategory }) => {
  return (
    <List.Section>
      <List.Accordion title="Categories" >
           {categoryData?.map(categorie => <Button key={categorie.id} mode="outlined" style={{ borderRadius: 0 }}
            onPress={() => setCategory(categorie.category)}> {categorie.category} </Button>) }
      </List.Accordion>
    </List.Section>
  );
};

export default Categories;
