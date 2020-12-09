import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('root', () => App);
AppRegistry.runApplication('root', {
  rootTag: document.getElementById('root'),
});
