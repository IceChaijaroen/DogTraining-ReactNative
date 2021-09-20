import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function Fonts () {
    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('./bahnschrift.ttf'),
        'FC_Iconic' : require('./FC_Iconic_Bold.ttf'),
        'FC_Iconicslim' : require('./FC_Iconic_Regular.ttf'),
      });
      
  if (!fontsLoaded) {
    return <AppLoading />;
  }
}