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
   
    function onSaveText() {
        // textをupdateする関数をNoteStoreで作る
    }



    return (
        <SafeAreaView>
            <View>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                />
                <Button onPress={onSaveText} title="save"></Button>
                <Button onPress={() => {
                    removeNote(obj);
                    (async() => {
                        try {
                            await fetch("http://localhost:3001/notes").then((res) => res.json()).then((data) => {
                            for(let obj of data) {
                                if(JSON.stringify(targetObj) === JSON.stringify(obj)) {
                                    return obj.id;
                                }
                            }
                            }).then((targetId) => {
                                (async() => {
                                    try {
                                        await fetch(`http://localhost:3001/delete/${targetId}`).then((res) => res.json()).then((data) => { console.log(data); });
                                    } catch(err) {
                                        alert(err);
                                    }
                                })()
                            });             
                        } catch(err) {
                            alert(err);
                        }
                    })()
                    navigation.navigate("Home");
                }} title="delete"></Button>
            </View>
    </SafeAreaView>)
}