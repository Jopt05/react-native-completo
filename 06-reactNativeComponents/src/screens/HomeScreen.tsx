import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import { FlatListItem } from '../components/FlatListItem';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen'
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    components: 'SwitchScreen'
  },
  {
    name: 'Alertas',
    icon: 'alert-outline',
    components: 'AlertScreen'
  },
  {
    name: 'TextInput',
    icon: 'text-outline',
    components: 'TextScreen'
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    components: 'PullToRefreshScreen'
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    components: 'SectionListScreen'
  },
  {
    name: 'Infinite Scroll',
    icon: 'download-outline',
    components: 'InfiniteScrollScreen'
  },
  {
    name: 'Slide Screen',
    icon: 'flower-outline',
    components: 'SlidesScreen'
  },
  {
    name: 'Change Theme Screen',
    icon: 'flask-outline',
    components: 'ChangeThemeScreen'
  },
]

export const HomeScreen = () => {

  const insets = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: insets.top, marginBottom: 20 }} >
        <Text style={ styles.title } >Opciones</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return (
      <View 
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList 
        data={ menuItems }
        renderItem={ ({ item }) =>  <FlatListItem menuItem={item} />}
        keyExtractor={ (item) => item.name}
        ListHeaderComponent={ () => renderListHeader() }
        ItemSeparatorComponent={ () => itemSeparator() }
      />
    </View>
  )
}
