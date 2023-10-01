import { Text, View, Button, SafeAreaView } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ContentPage() {
    const navigation = useNavigation();
    const route = useRoute();
    const obj = route.params.obj;
    const deleteData = route.params.deleteData;
    return (
        <SafeAreaView>
            <View>
                <Text>{obj.content}</Text>
                <Button onPress={() => {
                    deleteData(obj);
                    navigation.navigate("Home");
                }} title="delete"></Button>
            </View>
    </SafeAreaView>)
}