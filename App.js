import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import TitleMenu from './src/TitleMenu';
import AppNavi from './src/AppNavi';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      
      <AppNavi><TitleMenu/></AppNavi>
    </TailwindProvider>
  );
}
