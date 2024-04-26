import {ActionTypes} from '../actions/notificationActions';
import {Notification} from "../../models/Notification";

interface NotificationState {
    notifications: Notification[];
}

const initialState: NotificationState = {
    notifications: [],
};

const notificationReducer = (state = initialState, action: any): NotificationState => {
    switch (action.type) {
        case ActionTypes.FETCH_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            };
        default:
            return state;
    }
};

export default notificationReducer;