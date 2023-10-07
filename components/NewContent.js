import React, { useEffect, useState} from 'react';
import {Button, InputAccessoryView, ScrollView, TextInput, Text, FlatList, View} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {useNoteStore} from "./NoteStore";



export default function NewContent() {
    const route = useRoute();
    const navigation = useNavigation();
    const inputAccessoryViewID = 'uniqueID';
    const { text, setText, title, setTitle, note, setNote, addNote} = useNoteStore();
    const initialText = '';
    
    const [news, setNews] = useState([]);
  

    useEffect(() => {
       fetch("http://localhost:3001/news")
       .then(res => res.json())
       .then(data => setNews(data))
       .catch(error => console.log(error));
    }, []);
    
    

    async function postNote(newObj) {
      console.log("NEWCONTENT:", newObj);
      const res = await fetch("http://localhost:3001/create", {
        method: "POST",
         headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(newObj)
      });
      const newObjData = res.json();
      console.log(newObjData);
    }

    return (
        <>
          <ScrollView keyboardDismissMode="interactive">
            <Text style={{
                padding: 5,
                marginTop: 3,
                fontSize: "1.2rem"
              }}>News Headlines</Text>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          
          return (
          <View>
            <Text style={{
              padding: "3px",
              height: "2rem",
              borderColor: "block",
              fontWeight: "bold"
            }}>{item.title}</Text>
            <Text style={{
              padding: "3px",
              color: "green",
              textDecorationColor: "green",
              textDecorationLine: "underline"
            }} onPress={() => window.location.assign(item.url)}>{item.url}</Text>
          </View>
        )}}
      />
      
          <TextInput
              style={{
                padding: 16,
                marginTop: 20,
                fontSize: "1.2rem"
              }}
              inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setTitle}
              value={title}
              placeholder={'Title'}
            />
            <TextInput
              style={{
                padding: 16,
                marginTop: 30,
                fontSize: "1.2rem",
                maxWidth: "100%"
              }}
              inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setText}
              value={text}
              placeholder={'Please type here…'}
            />
          </ScrollView>
          <InputAccessoryView style={{
              borderColor: "#2E4374",
              fontSize: "1.2rem",
              width: "100%"
            }}  nativeID={inputAccessoryViewID}>
            <Button color="#2E4374" onPress={() => setText(initialText)} title="Clear text" />
            <Button color="#2E4374" onPress={() => {
                const newData = {title: title, content: text, news: news}
                addNote(newData);
                if(newData.title !== undefined) {
                  postNote(newData);
                }
                navigation.navigate("Home");
            }} title="Save" />
          </InputAccessoryView>
        </>
      );
}