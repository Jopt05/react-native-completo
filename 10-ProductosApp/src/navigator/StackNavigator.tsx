import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ProductsNavigator } from './ProductsNavigator';

const Stack = createStackNavigator();

export default function Navigator() {

  const { status } = useContext( AuthContext );

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      {/* Esto se reconstruye al cambiar estado, por lo que da impresion
      de navegacion, pero en realidad es que al logear las dos rutas de 
      login y register no existen. */}
      {
        ( status !== 'authenticated' )
          ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </>
          )
          : (
            <>
              <Stack.Screen name="ProductsNavigator" component={ProductsNavigator} />
              <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
            </>
          )
      }
    </Stack.Navigator>
  );
}