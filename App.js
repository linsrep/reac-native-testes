import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// Styles
import { styles } from './styles';
// Components
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" />
        <Button label="Usar esta foto" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}