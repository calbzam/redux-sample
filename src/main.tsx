import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloWorldContainer, NameEditContainer } from './components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {reducers} from './reducers';

const nonTypedWindow : any = window;
const store = createStore(reducers,
  nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__ && nonTypedWindow.__REDUX_DEVTOOLS_EXTENSION__()
 );

ReactDOM.render(
    <Provider store={store}>
      <>    
      <HelloWorldContainer/>
      <br/>
      <NameEditContainer/>
      </>    
    </Provider>,
    document.getElementById('root'));