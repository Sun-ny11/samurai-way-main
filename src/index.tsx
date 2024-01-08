import './index.css';
import {  store,} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



export const rerenderEntireTree = ()=>{
  ReactDOM.render(
  <BrowserRouter>
    <App stateApp={store.getState()}  dispatch={store.dispatch.bind(store)}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)