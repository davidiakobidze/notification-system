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
        case ActionTypes.ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    action.payload
                ],
            };
        case ActionTypes.DELETE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.filter(notification => notification.id !== action.payload),
            };
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