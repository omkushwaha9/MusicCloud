import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Track } from "react-native-track-player";

type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>

const SongInfo= ({track}: SongInfoProps) =>  {
    return (
        <View style={style.container}>
        <Text style={style.name}>
            {track?.title}
        </Text>
        <Text style={style.name}>
            {track?.artist} . {track?.album}
        </Text>
        
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 18,

        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent:'center',

    },
    name:{
       marginBottom:8,
       textAlign:'center',
    },
})
export default SongInfo