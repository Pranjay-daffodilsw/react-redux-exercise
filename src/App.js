import React from 'react';
import { Provider } from "react-redux";
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
