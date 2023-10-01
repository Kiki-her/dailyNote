
import { Text, View,  } from 'react-native';
import {useTailwind} from 'tailwind-rn';

import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
export default function Title(props) {
    const data = props.data;
    const setData = props.setData;

    function deleteData(targetObj) {
        const newData = data.filter((obj) => JSON.stringify(obj) !== JSON.stringify(targetObj));
        setData(newData);
    }
    
    useEffect(() => {
        console.log(data)
    }, [data])

    const tailwind = useTailwind();
    const navigation = useNavigation();
    return (
        <View style={tailwind('items-stretch m-0 left-0')}>
        {Array.isArray(data) ? Array.from(data).map((obj, i) => {
            return (<Text key={`title${i}`} style={tailwind('font-bold text-lg border-solid border-b-4 py-1')} onPress={() => navigation.navigate("Content", {
                obj,
                deleteData,
                data,
                setData
            }) }>{obj.title}</Text>);
        }) : <Text>Please make a new note.</Text>}
        </View>
    )
}