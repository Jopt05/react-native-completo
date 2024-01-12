import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext';

interface TouchableIconProps {
    IconName: string;
}

export const TouchableIcon = ({ IconName }: TouchableIconProps) => {

  const { changeFavIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity
        onPress={ () => changeFavIcon(IconName) }
    >
        <Icon name={IconName} size={50} color='red' />
    </TouchableOpacity>
  )
}
