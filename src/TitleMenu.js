import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, SafeAreaView } from 'react-native';
import Title from './Title';
import {useTailwind} from 'tailwind-rn';


export default function TitleMenu() {
    const tailwind = useTailwind();
 
    // Titleが上から並ぶ
    // クリックすると開く
    // スワイプすると削除できる
    // 右上にメモ追加ボタンがある
    return (
        <SafeAreaView style={tailwind('flex-1 justify-center')}>
         
                <Button style={tailwind("text-xl")} onPress={() => { console.log("tap"); }} title="新規作成"/>
                
                <Title />
                
           
        </SafeAreaView>
    )
}