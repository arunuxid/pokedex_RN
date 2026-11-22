import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { Stack } from "expo-router";



export default function Details() {
    const params = useLocalSearchParams()

    // console.log(params)

    const name = params.name

    useEffect(()=> {
    }, [])

    async function fetchPokemonByName(name: any){
        // try{
        //     const response = await fetch(
        //         `https://pokeapi.co/api/v2/pokemon/${params.name}`
        //     );
        //     console.log(response)
        // } catch(e){
        //     console.log(e)
        // }
    }

    return (
        <>
            <Stack.Screen options={{title: params.name as string}} />
            <ScrollView 
            contentContainerStyle={{
                gap:16,
                padding:16,
                backgroundColor: 'white',
                flex: 1
            }}
            >
                <Text style={{fontSize:32, fontWeight: 'bold'}}>{params.name}</Text>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

});
