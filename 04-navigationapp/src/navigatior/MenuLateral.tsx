import { DrawerContent, DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

// Se usó para acomodar el titulo de settins
// const Stack = createStackNavigator();

// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name='SettingsScreen'
//         component={SettingsScreen}
//       />
//     </Stack.Navigator>
//   )
// }

export const MenuLateral = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={ (props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen options={{ headerShown: true }} name="SettingsScreen" component={SettingsScreen} />
      {/* <Drawer.Screen name="SettingsScreen" component={SettingsStackScreen} /> */}
    </Drawer.Navigator>
  );
}

// Los props los sacas del drawerContent al pasar el mouse
const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {



  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://img.freepik.com/psd-gratis/icono-3d-aplicacion-redes-sociales_23-2150049569.jpg'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Menu options */}
      <View style={ styles.menuContainer }>

        <TouchableOpacity 
          style={ styles.menuBoton }
          onPress={ () => navigation.navigate("StackNavigator") }
        >
          <Text style={ styles.menuText }>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={ styles.menuBoton }
          onPress={ () => navigation.navigate("SettingsScreen") }
        >
          <Text style={ styles.menuText }>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}