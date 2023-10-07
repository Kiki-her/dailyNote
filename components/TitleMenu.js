import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, SafeAreaView } from 'react-native';
import Title from './Title';
import {useTailwind} from 'tailwind-rn';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { useNoteStore } from './NoteStore';


export default function TitleMenu() {
    // const note1 = { title: "10/1", content: "10月になった。暑い", news: "fhfah" };
    // const note3 = { title: "バナナジュース", content: "バナナジュースやさんに行った", news: "haugha"};
    // const note2 = { title: "もも", content: "ももが5箱届いた", news: ""};
    // const [data, setData] = useState([]);
    const { note, setNote, addNote} = useNoteStore();

   const isFocused = useIsFocused()
       useEffect(() => {
        (async() => { 
                const response = await fetch("http://localhost:3001/notes");
                const data = await response.json();
                
                setNote(data);
                console.log(data);
        
        })();
    }, []);
    useEffect(() => {
        (async() => { 
                const response = await fetch("http://localhost:3001/notes");
                const data = await response.json();
                
                setNote(data);
                console.log(data);
        
        })();
    }, [isFocused]);

    const tailwind = useTailwind();
    const navigation = useNavigation();
   
    return (
        <SafeAreaView style={tailwind('flex-1 justify-center')}>
                <Button style={tailwind("text-xl flex-low w-2/4")} color="#2E4374" onPress={() => { navigation.navigate("New") }} title="Add note"/>
                
                <Title />
                
           
        </SafeAreaView>
    )
}