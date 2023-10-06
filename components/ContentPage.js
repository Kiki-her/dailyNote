import { TextInput, View, Button, SafeAreaView, ScrollView, FlatList, Text  } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useNoteStore } from './NoteStore';
import { useEffect, useState, } from 'react';

export default function ContentPage() {
    const navigation = useNavigation();
    const route = useRoute();
    // data
    const obj = route.params.obj;
    // const deleteData = route.params.deleteData;
    const {removeNote} = useNoteStore();
    const [text, onChangeText] = useState(obj.content);
    const [title, onChangeTitle] = useState(obj.title);
    const [news, setNewsObj] = useState(obj.news);
    const [newsTitle, setNewsTitle] = useState("");
    const [newsUrl, setNewsUrl] = useState("");
    const [newsContent, setContent] = useState("");

    useEffect(() => {
        const toArray = [...obj.news];
        toArray.shift();
        toArray.pop();
        const pureObj = toArray.join("");
        const newsObj = JSON.parse(pureObj);
        setNewsObj(newsObj);
    }, []);
   
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

    function getTheDayNews() {
        if(typeof news !== "object") {
            console.log("NOT OBJECT:", typeof news)
        const data = JSON.parse(news);
        console.log(data);
        console.log(data.title, data.url)
        setNewsTitle(data.title);
        setNewsUrl(data.url);
        setContent(data.content);
        } else {
        setNewsTitle(data.title);
        setNewsUrl(data.url);
        setContent(data.content);
        }
        
    }

    return (
        <SafeAreaView>
             <ScrollView keyboardDismissMode="interactive">
            
        
          <TextInput
                    onChangeText={onChangeTitle}
                    value={title}
                />
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                />
                </ScrollView>
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
            <Text onPress={getTheDayNews}>The Day's News Headlines</Text>
            {newsTitle !== "" ? <><Text>{newsTitle}<br />{newsContent}</Text><Text onPress={() => window.location.assign(newsUrl)}>{newsUrl}</Text></>: <Text onPress={getTheDayNews}>"click here"</Text>}
          
    </SafeAreaView>)
}