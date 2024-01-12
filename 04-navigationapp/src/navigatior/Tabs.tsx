import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS =='ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
    // Agrega animación al moverse
      sceneAnimationEnabled={true}

      barStyle={{
        backgroundColor: colores.primary
      }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = "";
          switch( route.name ) {
            case 'Tab1Screen':
              iconName = 'airplane-outline'
            break;
            case 'Tab2Screen':
              iconName = 'airplane-outline'
            break;
            case 'StackNavigator':
              iconName = 'airplane-outline'
            break;
          }

          return(
            <Text>
              <Icon name={iconName} size={20} color='red' />
            </Text>
          )
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export function TabsIOS() {

  return (
    <BottomTabIOS.Navigator
      // screenOptions={{
      //   // Cambia el color del texto e íconos
      //   tabBarActiveTintColor: 'red',
      //   // Cambia cosas de la barra de tabs
      //   tabBarStyle: {
      //     borderTopColor: colores.primary,
      //     // borderTopWidth: 1,
      //     // elevation: 2
      //   },

      //   // Para la fuente
      //   tabBarLabelStyle: {
      //     fontSize: 15
      //   },

      //   // Para iconos
      //   tabBarIcon(props) {
          
      //   },
      // }}

      // Modo funcion
      screenOptions={({ route }) => ({
        // Cambia el color del texto e íconos
        tabBarActiveTintColor: 'red',
        // Cambia cosas de la barra de tabs
        tabBarStyle: {
          borderTopColor: colores.primary,
          // borderTopWidth: 1,
          // elevation: 2
        },

        // Para la fuente
        tabBarLabelStyle: {
          fontSize: 15
        },

        // Cambiar icono
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = "";
          switch( route.name ) {
            case 'Tab1Screen':
              iconName = 'airplane-outline'
            break;
            case 'Tab2Screen':
              iconName = 'airplane-outline'
            break;
            case 'StackNavigator':
              iconName = 'airplane-outline'
            break;
          }

          return(
            <Text>
              <Icon name={iconName} size={50} color='red' />
            </Text>
          )
        }
      })}
      
      // Cambia el color del fondo de la card
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      {/* Editar icono en linea */}
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}