import Container from "./components/Container";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Container />
      </Provider>
    </div>
  );
}

export default App;
