import React, { useContext, useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProductsContext } from '../context/ProductsContext'
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> {

}

export const ProductsScreen = ({ navigation }: Props) => {

  const { products, loadProducts } = useContext( ProductsContext );
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={ 0.8 }
          style={{ marginRight: 10 }}
          onPress={ () => navigation.navigate('ProductScreen', {
            name: 'Nuevo Producto'
          }) }
        >
          <Text style={{ color: 'black' }}>
            Agregar
          </Text>
        </TouchableOpacity> 
      )
    })
  }, [])

  const loadProducstFromBackend = async() => {
    setIsRefreshing(true);
    await loadProducts();
    setIsRefreshing(false);
  }
  
  return (
    <View style={{
      flex: 1,
      marginHorizontal: 10,
    }}>
      <FlatList 
        refreshControl={
          <RefreshControl 
              refreshing={ isRefreshing }
              onRefresh={ loadProducstFromBackend }
          />}
        data={ products }
        keyExtractor={ p => p._id }
        renderItem={ ({ item }) => (
          <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate('ProductScreen', {
              id: item._id,
              name: item.nombre
            }) }
          >
            <Text style={ styles.productName }>
              { item.nombre }
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={ () => (
          <View style={ styles.itemSeparator }>
          </View>
        ) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
    color: 'red'
  },
  itemSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginVertical: 5
  }
})