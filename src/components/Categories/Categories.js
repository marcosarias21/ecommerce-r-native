import { Button, List } from 'react-native-paper';
import { categoryData } from '../../helper/categoryData';

const Categories = ({ setCategory }) => {
  return (
    <List.Section>
      <List.Accordion title="Categories" >
           {categoryData?.map(categorie => <Button key={categorie.id} mode="text"
            onPress={() => setCategory(categorie.category)}> {categorie.category} </Button>) }
      </List.Accordion>
    </List.Section>
  );
};

export default Categories;
