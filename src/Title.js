import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function Title() {
    const tailwind = useTailwind();
    // fakeData
    const fakeDataObj = [
        { title: "10/1", content: "10月になった。暑い", news: "fhfah" },
        { title: "バナナジュース", content: "バナナジュースやさんに行った", news: "haugha"},
        { title: "もも", content: "ももが5箱届いた", news: ""}
    ];

    return (
        fakeDataObj[0] ? fakeDataObj.map((obj) => {
            return <Text fakeDataObj={fakeDataObj} style={tailwind('font-bold')}>{obj.title}</Text>
        }) : <Text>新しく作成する</Text>
    )
}