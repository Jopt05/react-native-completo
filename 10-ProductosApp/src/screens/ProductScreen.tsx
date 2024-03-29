import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import {Picker} from '@react-native-picker/picker';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {

}

export const ProductScreen = ({ navigation, route }: Props) => {

  const { id = '', name = '' } = route.params;

  const { loadProductById, addProduct, updateProduct } = useContext( ProductsContext );

  const { categories } = useCategories();

  const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: '',
  });

  useEffect(() => {
    navigation.setOptions({
      title: ( nombre ) ? nombre : 'Nuevo Producto'
    })
  }, [nombre])

  useEffect(() => {
    loadProduct()
  }, [])

  const loadProduct = async() => {
    if( id.length == 0 ) return;
    const product = await loadProductById( id );
    setFormValue({
      _id: product._id,
      categoriaId: product.categoria._id,
      img: product.img,
      nombre: product.nombre
    })
  }

  const saveOrUpdate = async() => {
    if( id.length > 0 ) {
      updateProduct( categoriaId, nombre , id);
    } else {
      if( categoriaId.length == 0 ) {
        onChange( categories[0]._id, 'categoriaId' )
      };
      const tempCategoriaId = categoriaId ?? categories[0]._id;
      const newProduct = await addProduct( tempCategoriaId, nombre );

      onChange( newProduct._id, '_id' )
    }
  }
  
  return (
    <View style={ styles.container }>
      <ScrollView>
        <Text style={ styles.label }>
          Nombre del producto:
        </Text>
        <TextInput 
          placeholder='Producto'
          style={ styles.textInput }
          value={ nombre }
          onChangeText={ (value) => onChange( value, 'nombre' ) }
        />

        
        <Text style={ styles.label }>
          Seleccione categoría:
        </Text>

        <Picker
          selectedValue={ categoriaId }
          onValueChange={(itemValue) =>
            onChange( itemValue, 'categoriaId' )
          }>
          {
            categories.map( c => (
              <Picker.Item label={ c.nombre } value={c._id} key={c._id}/>
            ) )
          }
        </Picker>

        <Button 
          title='Guardar'
          onPress={ () => saveOrUpdate() }
          color={ '#5856D6' }
        />
        {
          ( _id.length > 0 ) && (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10
            }}>
              <Button 
                title='Cámara'
                onPress={ () => {} }
                color={ '#5856D6' }
              />

              <View style={{
                width: 10
              }}>

              </View>

              <Button 
                title='Galeria'
                onPress={ () => {} }
                color={ '#5856D6' }
              />
            </View>
          )
        }

          {
            (img != undefined) && (
              <Image 
              source={{
                uri: img
              }}
              style={{
                  width: "100%",
                  height: 300
                }}
              />
            )
          }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20
  },
  label: {
    fontSize: 18
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginVertical: 15
  }
})