import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

export const TextScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const onChange = ( value: string, field: string ) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <View>
            <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center' }}>
                Inputs
            </Text>

            <TextInput
              style={ styles.textInput }
              placeholder='Ingrese su nombre'
              autoCorrect={ false }
              // Capitalizar oraciones o palabras
              autoCapitalize='words'
              // Al escribir texto
              onChangeText={ ( value ) => onChange( value, 'name' ) }
            />
            <TextInput
              style={ styles.textInput }
              placeholder='Ingrese su email'
              autoCorrect={ false }
              autoCapitalize='none'
              onChangeText={ ( value ) => onChange( value, 'email' ) }
              // Solo ios
              keyboardAppearance='dark'
            />
            <TextInput
              style={ styles.textInput }
              placeholder='Ingrese su teléfono'
              onChangeText={ ( value ) => onChange( value, 'phone' ) }
              keyboardType='numeric'
            />

            <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center' }}>
                { JSON.stringify(form, null, 4) }
            </Text>
            <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center' }}>
                { JSON.stringify(form, null, 4) }
            </Text>
            <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center' }}>
                { JSON.stringify(form, null, 4) }
            </Text>
            <TextInput
              style={ styles.textInput }
              placeholder='Ingrese su teléfono'
              onChangeText={ ( value ) => onChange( value, 'phone' ) }
              keyboardType='numeric'
            />
            <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center' }}>
                { JSON.stringify(form, null, 4) }
            </Text>
            <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center' }}>
                { JSON.stringify(form, null, 4) }
            </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    opacity: 0.5,
    marginHorizontal: 30,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 20
  }
})