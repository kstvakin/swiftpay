import { AppRegistry } from 'react-native';
import App from '../../App.tsx';
import appName from '../../app.json';

// Register the app for web
AppRegistry.registerComponent(appName.name, () => App);

// Mount the app on the web
AppRegistry.runApplication(appName.name, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
