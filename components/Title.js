
import { Text, View,  } from 'react-native';
import {useTailwind} from 'tailwind-rn';

import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useNoteStore } from './NoteStore';

export default function Title() {

    const {note, setNote} = useNoteStore();
    console.log(note)


    const tailwind = useTailwind();
    const navigation = useNavigation();
    return (
        <View style={tailwind('items-stretch m-0 left-0')}>
        {Array.isArray(note) ? Array.from(note).map((obj, i) => {
            return (<Text key={`title${i}`} style={{
                fontWeight: "bold",
                borderStyle: "solid",
                borderBlockColor: "block",
                padding: "5px",
                fontSize: "1.5rem",
                borderBottomWidth: 1,
                backgroundColor: "white"
            }} onPress={() => navigation.navigate("Content", {
                obj,
            }) }>{obj.title}</Text>);
        }) : <Text>Please make a new note.</Text>}
        </View>
    )
}