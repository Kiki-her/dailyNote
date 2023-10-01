import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, SafeAreaView } from 'react-native';
import Title from './Title';
import {useTailwind} from 'tailwind-rn';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function TitleMenu() {
    const note1 = { title: "10/1", content: "10月になった。暑い", news: "fhfah" };
    const note3 = { title: "バナナジュース", content: "バナナジュースやさんに行った", news: "haugha"};
    const note2 = { title: "もも", content: "ももが5箱届いた", news: ""};
    const [data, setData] = useState([note1, note2, note3]);
   
    useEffect(() => {
        fetch("http://localhost3001/notes").then((res) => {
            if(!res.ok) {
                throw new Error("Network res was not ok")
            }
        return res.json();
    }).then((data) => {
        console.log(data, "FFFF")
    });
    }, []);

    const tailwind = useTailwind();
    const navigation = useNavigation();
    function addData(targetObj, data) {
        if(Array.isArray(targetObj) !== true && typeof targetObj === "object") {
            setData(...data, targetObj);
        }
    }
    
   
    return (
        <SafeAreaView style={tailwind('flex-1 justify-center')}>
         
                <Button style={tailwind("text-xl")} onPress={() => { navigation.navigate("New", {
                    data,
                    setData,
                    addData
                }) }} title="New"/>
                
                <Title data={data} setData={setData}/>
                
           
        </SafeAreaView>
    )
}