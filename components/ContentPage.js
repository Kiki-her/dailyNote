import { TextInput, View, Button, SafeAreaView, ScrollView, Text  } from 'react-native';
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
                "Content-Type": "application/json",
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
                      style={{
                        fontWeight: "bold",
                        padding: 5,
                        marginTop: 5,
                        fontSize: "1.2rem"
                    }}
                />
                <TextInput
                    multiline={true}
                    onChangeText={onChangeText}
                    value={text}
                      style={{
                        padding: 5,
                        marginTop: 10,
                        fontSize: "1.2rem",
                        maxWidth: "100%",
                        height: "50vh"
                    }}
                />
                </ScrollView>
            <Text style={{
                marginTop: "10px",
                padding: "3px",
                height: "2rem",
                borderColor: "block"
            }} onPress={getTheDayNews}>The Day's News Headlines</Text>
            {newsTitle !== "" ? <><Text style={{
                padding: "3px",
                borderColor: "block"
            }}>{newsTitle}<br />{newsContent}</Text><Text style={{
                padding: "3px",
                borderColor: "block",
                color: "green",
                textDecorationColor: "green",
                textDecorationLine: "underline",
            }} onPress={() => window.location.assign(newsUrl)}>{newsUrl}</Text></>: <Text onPress={getTheDayNews}>"click here"</Text>}
            <View style={{
                color: "#2E4374",
                position: "fixed",
                bottom: 0,
                width: "100%"
            }}>
                <Button color="#2E4374" onPress={onSaveText} title="save"></Button>
                <Button color="#2E4374" onPress={() => {
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