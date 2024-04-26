import { combineReducers } from 'redux';
import notificationReducer from './reducer/notificationReducer';

const rootReducer = combineReducers({
    notification: notificationReducer,
});

export default rootReducer;