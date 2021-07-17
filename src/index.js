import {rerenderFunc} from './render';
import state from './components/redux/state';
import reportWebVitals from "./reportWebVitals";
rerenderFunc(state);

reportWebVitals();