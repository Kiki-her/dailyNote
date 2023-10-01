import { StatusBar } from 'expo-status-bar';
import { Text, View,  } from 'react-native';
import {useTailwind} from 'tailwind-rn';

import { useNavigation } from '@react-navigation/native';
import { useEffect , useState} from 'react';
export default function Title() {
    const note1 = { title: "10/1", content: "10月になった。暑い", news: "fhfah" };
    const note3 = { title: "バナナジュース", content: "バナナジュースやさんに行った", news: "haugha"};
    const note2 = { title: "もも", content: "ももが5箱届いた", news: ""};
    const [data, setData] = useState([note1, note2, note3]);
    useEffect(() => {
        console.log("追加")
    }, [data])

    const tailwind = useTailwind();
    const navigation = useNavigation();

    // fakeData
    
    

 // クリックすると開く

    // 削除できる
    return (
        <View style={tailwind('items-stretch m-0 left-0')}>
        {data[0] ? data.map((obj, i) => {
            return <Text key={`title${i}`} style={tailwind('font-bold text-lg border-solid border-b-4 py-1')} onPress={() => navigation.navigate("Content", {
                obj
            }) }>{obj.title}</Text>
        }) : <Text>新しく作成する</Text>}
        </View>
    )
}