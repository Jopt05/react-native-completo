import React, { useContext } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WhiteLogo } from '../components/WhiteLogo'
import loginStyle from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any>{}

export const RegisterScreen = ({ navigation }: Props) => {

  const { signUp } = useContext( AuthContext );

  const { name, correo, password, onChange } = useForm({
    name: '',
    correo: '',
    password: ''
  });

  const onRegister = () => {
    console.log("Register")
    Keyboard.dismiss();

    signUp({
      correo: correo,
      nombre: name,
      password: password
    })
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: '#5856B6'
        }}
        behavior={ (Platform.OS == 'ios') ? 'padding' : 'height' }
      >
        <View style={ loginStyle.formContainer }>

          <WhiteLogo />

          <Text style={ loginStyle.title }>
            Register
          </Text>

          <Text style={ loginStyle.label }>
            Email
          </Text>

          <TextInput 
            placeholder='Ingrese su nombre:'
            placeholderTextColor='rgba(255,255,255,0.4)'
            keyboardType='email-address'
            underlineColorAndroid={'white'}
            style={[
              loginStyle.inputField,
              ( Platform.OS == 'ios' ) && loginStyle.inputFieldIOS
            ]}
            selectionColor={'white'}
            autoCapitalize='words'
            value={ name }
            onSubmitEditing={ onRegister }
            onChangeText={ (value) => onChange(value, 'name') }
          />

          <Text style={ loginStyle.label }>
            Email
          </Text>
          
          <TextInput 
            placeholder='Ingrese su email:'
            placeholderTextColor='rgba(255,255,255,0.4)'
            keyboardType='email-address'
            underlineColorAndroid={'white'}
            style={[
              loginStyle.inputField,
              ( Platform.OS == 'ios' ) && loginStyle.inputFieldIOS
            ]}
            selectionColor={'white'}
            autoCapitalize='none'
            autoCorrect={false}
            value={ correo }
            onSubmitEditing={ onRegister }
            onChangeText={ (value) => onChange(value, 'correo') }
          />

          <Text style={ loginStyle.label }>
            Contraseña
          </Text>
          
          <TextInput 
            placeholder='***********'
            placeholderTextColor='rgba(255,255,255,0.4)'
            secureTextEntry
            underlineColorAndroid={'white'}
            style={[
              loginStyle.inputField,
              ( Platform.OS == 'ios' ) && loginStyle.inputFieldIOS
            ]}
            selectionColor={'white'}
            value={ password }
            onSubmitEditing={ onRegister }
            onChangeText={ (value) => onChange(value, 'password') }
          />

          <View style={ loginStyle.buttonContainer }>
            <TouchableOpacity
              activeOpacity={ 0.8 }
              style={ loginStyle.button }
              onPress={ () => onRegister() }
            >
              <Text style={ loginStyle.text }>
                Crear cuenta
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={ () => navigation.replace('LoginScreen') }
            activeOpacity={0.8}
            style={ loginStyle.buttonReturn }
          >
            <Text style={ loginStyle.text }>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}
