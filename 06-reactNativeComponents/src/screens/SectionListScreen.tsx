import React from 'react'
import { SafeAreaView, SectionList, Text, View } from 'react-native'

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama"]
    }
];

export const SectionListScreen = () => {
  return (
    <SafeAreaView>
        <View>
            <SectionList 
                ListHeaderComponent={ () => (
                    <Text style={{ marginTop: 20, fontSize: 20, textAlign: 'center', flex: 1 }} >
                        SectionList
                    </Text>
                ) } 

                ListFooterComponent={ () => (
                    <Text style={{ marginTop: 20, marginBottom: 20,fontSize: 20, textAlign: 'center', flex: 1 }} >
                        { `Total de casas ${ casas.length }` }
                    </Text>
                ) } 

                sections={ casas }
                // Toma automáticamente data como el item
                renderItem={ ({ item, index }) => <Text style={{ fontSize: 28 }}>{item}</Text>}
                // Sirve para tener IDs unicos
                keyExtractor={ (item, index) => item + index }
                // Section es cada objeto del array 
                renderSectionHeader={ ({ section }) => (
                    <Text style={{ fontSize: 32, color: 'black' }}>
                        { section.casa }
                    </Text>
                ) }

                renderSectionFooter={ ({ section }) => (
                    <Text style={{ fontSize: 32, color: 'black' }}>
                        { `Total: ${section.data.length}` }
                    </Text>
                ) }

                ItemSeparatorComponent={ () => (
                    <View style={{ marginVertical: 2, height: 2, backgroundColor: 'red' }}>

                    </View>
                ) }

                SectionSeparatorComponent={ () => (
                    <View style={{ marginVertical: 2, height: 2, backgroundColor: 'blue' }}>

                    </View>
                ) }

                showsVerticalScrollIndicator={ false }
            />
        </View>
    </SafeAreaView>
  )
}
