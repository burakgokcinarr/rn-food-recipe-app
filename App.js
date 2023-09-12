import RouteNavigation from './src/navigation/RouteNavigation';
import { useFonts } from 'expo-font';
import { FontLoader } from './src/config/FontLoader';

export default function App() {

  const [isLoaded] = useFonts(FontLoader);

  if (!isLoaded) {
      return null
  }

  return (
    <RouteNavigation/>
  );
}