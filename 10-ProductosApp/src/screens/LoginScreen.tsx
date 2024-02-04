import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import loginStyle from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any>{}

export const LoginScreen = ({ navigation }: Props) => {

  const { signIn, errorMessage, removeError } = useContext(AuthContext);

  const { correo, password, onChange } = useForm({
    correo: '',
    password: ''
  });

  const onLogin = () => {
    console.log("Login")
    Keyboard.dismiss();

    signIn({
      correo,
      password
    });
  }

  useEffect(() => {
    // Esto no cambia si por ejemplo nos equivocamos de contraseña 
    // Por lo que removemos el error para poder mostrarlo de nuevo en caso
    // de volver a fallar 
    if( errorMessage.length == 0 ) return;

    Alert.alert(
      'Login incorrecto',
      errorMessage,
      [
        {
          text: 'Ok',
          onPress: () => removeError()
        }
      ]
    )
  }, [errorMessage])
  

  return (
    <>
      <Background />

      <KeyboardAvoidingView
        style={{
          flex: 1 
        }}
        behavior={ (Platform.OS == 'ios') ? 'padding' : 'height' }
      >
        <View style={ loginStyle.formContainer }>

          <WhiteLogo />

          <Text style={ loginStyle.title }>
            Login
          </Text>

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
            onSubmitEditing={ () => onLogin() }
            onChangeText={ (value) => onChange(value, 'password') }
          />

          <View style={ loginStyle.buttonContainer }>
            <TouchableOpacity
              activeOpacity={ 0.8 }
              style={ loginStyle.button }
              onPress={ () => onLogin() }
            >
              <Text style={ loginStyle.text }>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View style={ loginStyle.newUserContainer }>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={ () => navigation.replace('RegisterScreen') }
            >
              <Text style={ loginStyle.text }>
                Nueva Cuenta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}
