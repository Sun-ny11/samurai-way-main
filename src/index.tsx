import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { stateType } from './redux/state';
import { store } from './redux/store';
import { Provider } from 'react-redux';



export const rerenderEntireTree = (state: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>,
    document.getElementById('root')
  );
}


rerenderEntireTree(store.getState())
store.subscribe(() => {
  rerenderEntireTree(store.getState())
})