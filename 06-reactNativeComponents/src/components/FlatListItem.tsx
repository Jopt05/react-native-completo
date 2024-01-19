import React from 'react'
import { Text, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem
}

export const FlatListItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.components)}
        >
            <View style={ styles.container }>
                <Icon 
                    name={menuItem.icon}
                    color={"gray"}
                    size={23}
                />
                <Text style={ styles.itemText }>
                    { menuItem.name }
                </Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name={"chevron-forward-outline"}
                    color={"gray"}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 18
    }
})