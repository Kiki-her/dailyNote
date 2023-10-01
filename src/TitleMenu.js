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
        <SafeAreaView style={tailwind('flex-1 justify-center m-0 left-0 items-stretch')}>
         
                <Button style={tailwind("text-xl")} onPress={() => { console.log("tap"); }} title="add button"/>
                
                <Title />
                
           
        </SafeAreaView>
    )
}