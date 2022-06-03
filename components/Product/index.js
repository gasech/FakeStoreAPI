import * as React from 'react';
import { Text, Image, Pressable, StyleSheet, View } from 'react-native';

export default function Product({name,rating,link,price,categoryColor}) {
  return (
    <View>
      <Pressable>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />
        <Text style={[{backgroundColor : categoryColor}, styles.paragraph]}>
          <Text style={styles.title}>{name}</Text><br/>
          {rating}<br/>
          <Text style={styles.price}>R${price}</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 12,
    padding: 10,
    fontSize: 18,
    fontWeight: 'lighter',
    textAlign: 'center',
    color: '#fff',
    borderRadius: '10px'
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: '50px',
    alignSelf: 'center'
  },
});
