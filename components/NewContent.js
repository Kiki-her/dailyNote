import React, {useEffect, useState} from 'react';
import {Button, InputAccessoryView, ScrollView, TextInput} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {useNoteStore} from "./NoteStore";


export default function NewContent() {
    const route = useRoute();
    const navigation = useNavigation();
    const inputAccessoryViewID = 'uniqueID';
    const { text, setText, title, setTitle, note, setNote, addNote} = useNoteStore();
    const initialText = '';
    // const [text, setText] = useState(initialText);
    // const [title, setTitle] = useState(initialText);

    // const data = route.params.data;
    // const setData = route.params.setData;
    // const addData = route.params.addData;
    // function addData(targetObj, data) {
    //     if(Array.isArray(targetObj) !== true && typeof targetObj === "object") {
    //         fetch("http://localhost3001/create", {
    //             method: "POST",
    //             body: targetObj
    //         }).then((res) => res.json()).then((res) => {
    //             console.log(res);
    //         })
    //         setData(...data, targetObj);
    //     }
    // }
    
    return (
        <>
          <ScrollView keyboardDismissMode="interactive">
          <TextInput
              style={{
                padding: 16,
                marginTop: 50,
              }}
              inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setTitle}
              value={title}
              placeholder={'Title'}
            />
            <TextInput
              style={{
                padding: 16,
                marginTop: 50,
              }}
              inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setText}
              value={text}
              placeholder={'Please type here…'}
            />
          </ScrollView>
          <InputAccessoryView nativeID={inputAccessoryViewID}>
            <Button onPress={() => setText(initialText)} title="Clear text" />
            <Button onPress={() => {
                const newData = {title: title, content: text}
                // addData(newData, data);
                addNote(newData);
                if(newData.title !== undefined) {
                  fetch("http://localhost3001/create", {
                      method: "POST",
                      body: newData
                  }).then((res) => res.json()).then((res) => {
                      console.log(res);
                  })
                }
                navigation.navigate("Home");
            }} title="Save" />
          </InputAccessoryView>
        </>
      );
}