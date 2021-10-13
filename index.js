/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

// App kısmı -> default export ile export edilmiş değişken (İstediğimiz ismi verebiliriz)
// { age, func } -> tekil olarak export edilmiş değişkenler
import App, { age, func } from './StylingLayout/App';
import App2 from './StylingLayout/App2';
import App3 from './StylingLayout/App3';
import App4 from './StylingLayout/App4';

import HomeScreen from './CoreComponents/HomeScreen';
// import ShoppingList from './CoreComponents/ShoppingList';
import Counter from './State/Counter';
import ShoppingList from './State/ShoppingList';

import {name as appName} from './app.json';
// yorum
// pull için ekleme
// yeni branch
AppRegistry.registerComponent(appName, () => ShoppingList);
