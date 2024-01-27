import { createContext, useEffect, useState } from "react";
import { AppState, Platform } from "react-native";
import { PERMISSIONS, PermissionStatus, check, openSettings, request } from "react-native-permissions";

export interface PermissionsInitalState {
    locationStatus: PermissionStatus;
    // cameraStatus: PermissionStatus;
}

export const permissionInitState: PermissionsInitalState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsInitalState,
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps); //TODO Que exporta

export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState( permissionInitState );

    useEffect(() => {

        AppState.addEventListener('change', (state) => {
            if( state !== 'active' ) return;

            checkLocationPermission();
        })
    }, [])
    

    const askLocationPermission = async () => {

        let permissionStatus: PermissionStatus;

        // Primero se hace una validación
        if( Platform.OS == 'ios' ) {
            
            permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE )

        } else {

            permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );

        }

        if( permissionStatus == 'blocked' ) {
            // Abre los settings
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })

    }

    const checkLocationPermission = async() => {
        let permissionStatus: PermissionStatus;

        // Primero se hace una validación
        if( Platform.OS == 'ios' ) {
            
            permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE )

        } else {

            permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );

        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })

    }

    return(
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission
        }}>
            { children }
        </PermissionsContext.Provider>
    )
}