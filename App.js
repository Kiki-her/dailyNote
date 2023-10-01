import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import TitleMenu from './src/TitleMenu';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <TitleMenu/>
    </TailwindProvider>
  );
}
