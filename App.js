import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import TitleMenu from './components/TitleMenu';
import AppNavi from './components/AppNavi';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      
      <AppNavi><TitleMenu/></AppNavi>
    </TailwindProvider>
  );
}
