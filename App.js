import { StatusBar } from 'react-native';
import Navigation from './navigation/navigation';

export default function App() {
  StatusBar.setBarStyle("dark-content");
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("white");
    StatusBar.setTranslucent(true);
  }

  return (
    <Navigation></Navigation>
  );
}

