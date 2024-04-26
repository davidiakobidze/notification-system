import NewNotification from "./components/NewNotification";
import Notifications from './components/Notifications';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <NewNotification/>
            <Notifications/>
        </Provider>
    );
}

export default App;
