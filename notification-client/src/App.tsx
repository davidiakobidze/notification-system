import Notifications from './components/Notifications';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <Notifications/>
        </Provider>
    );
}

export default App;
