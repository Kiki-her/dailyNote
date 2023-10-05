import { TextInput, View, Button, SafeAreaView } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useNoteStore } from './NoteStore';
import { useEffect, useState } from 'react';

export default function ContentPage() {
    const navigation = useNavigation();
    const route = useRoute();
    const obj = route.params.obj;
    // const deleteData = route.params.deleteData;
    const {removeNote} = useNoteStore();
    const [text, onChangeText] = useState(obj.content);
    const [title, onChangeTitle] = useState(obj.title);
   
    async function onSaveText() {
        // textをupdateする
        const id = obj.id;
        const newObj = {
            id,
            title: title,
            content: text,
            news: obj.news,
        }
        const res = await fetch(`http://localhost:3001/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj),
        });
    
        const message = res.json();
        console.log(message);
    }



    return (
        <SafeAreaView>
            <View>
                <TextInput
                    onChangeText={onChangeTitle}
                    value={title}
                />
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                />
                <Button onPress={onSaveText} title="save"></Button>
                <Button onPress={() => {
                    removeNote(obj);
                    (async() => {
                       const result = await fetch(`http://localhost:3001/delete/${obj.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        });
                       console.log(result.json());
                    })()
                    navigation.navigate("Home");
                }} title="delete"></Button>
            </View>
    </SafeAreaView>)
}