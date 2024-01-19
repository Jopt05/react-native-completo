import React, { useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            console.log("Termino de cargar");
            setIsRefreshing(false);
            setData("Hola mundo");
        }, 3000);
    }

    return (
        <ScrollView
            // Tenemos que regresar un JSX refresh control
            refreshControl={
                <RefreshControl 
                    // Está refrescando?
                    refreshing={ isRefreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 10 }
                    progressBackgroundColor={'purple'}
                    // Cambia de colores mientras carga 
                    colors={[
                        'white',
                        'red',
                        'orange'
                    ]}

                    // Solo IOS
                    style={{ backgroundColor: 'red' }}
                    tintColor={'white'}
                    title='Refrescando'
                    titleColor={'white'}
                />
            }   
        >
            <View>
                <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
                    Pull To Refresh
                </Text>

                <Text style={{ fontSize: 20, marginTop: 50, textAlign: 'center' }}>
                    {
                        data
                    }
                </Text>
            </View>
        </ScrollView>
    )
}
