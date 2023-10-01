import { Text, View, Button, SafeAreaView } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ContentPage() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View>
            <Text>{route.params.obj.content}</Text>
            
    </View>)
}