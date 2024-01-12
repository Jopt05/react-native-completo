import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {

    const { top: safeInsetTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{
            paddingTop: safeInsetTop,
        }}
        // Edita la carta dentro del elemento o stack
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}

        // Editar los tabs individuales
        screenOptions={(props) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle: {
                elevation: 0,
                borderTopWidth: 0,
                // IOS
                shadowColor: 'transparent'
            },
            tabBarIcon: ({ color, focused }) => {
                let iconName: string = "";
                switch( props.route.name ) {
                  case 'ChatScreen':
                    iconName = 'T1'
                  break;
                  case 'ContactsScreen':
                    iconName = 'T2'
                  break;
                  case 'AlbumsScreen':
                    iconName = 'T3'
                  break;
                }
      
                return( <Text style={{ color: color }}>{iconName}</Text> )
              }
        })}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}