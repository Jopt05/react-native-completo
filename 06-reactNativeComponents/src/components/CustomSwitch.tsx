import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface SwitchProps {
    isOn: boolean;
    onChange: ( isEnabled: boolean ) => void;
}

export const CustomSwitch = ({ isOn, onChange }:  SwitchProps) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled( !isEnabled );
        onChange( !isEnabled );
    };

    return (
        <Switch
            trackColor={{false: 'red', true: '#81b0ff'}}
            thumbColor={ (Platform.OS === 'android') ? '#5856d6' : '' }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={ isEnabled }
        />
    )
}
