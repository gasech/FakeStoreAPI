import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable,Image,ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import Product from './components/Product';

export default function App() {
  const [data, setData] = React.useState([{}]);

  React.useEffect(function() {
    fetch(`https://fakestoreapi.com/products`)
    .then(function (serverResponse){
      return serverResponse.json();
    })
    .then(function (finalResponse){
      setData(finalResponse);
    })
  }, [])

  function renderItem({item}){
    let name = item.title;
    let price = parseFloat(item.price)
    let finalPrice = price.toFixed(2);
    let categoryColor;
    
    switch(item.category) {
      case 'electronics':
        categoryColor = '#d91d1d';
        break;
      case 'jewelery':
        categoryColor = '#aec5c5';
        break;
      case "men's clothing":
        categoryColor = '#99DDDD';
        break;
      case "women's clothing":
        categoryColor = '#DABDCE';
        break;
      default:
        categoryColor = '#FFFFFF';
    }
    console.log(item);

    return(
      <Product name={name} 
          rating={item.description} 
          link={item.image}
          price={finalPrice}
          categoryColor={categoryColor}
      />
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});