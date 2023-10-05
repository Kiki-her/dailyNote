import { Text, View, Button, SafeAreaView } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useNoteStore } from './NoteStore';

export default function ContentPage() {
    const navigation = useNavigation();
    const route = useRoute();
    const obj = route.params.obj;
    // const deleteData = route.params.deleteData;
    const {removeNote} = useNoteStore();


    return (
        <SafeAreaView>
            <View>
                <Text>{obj.content}</Text>
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