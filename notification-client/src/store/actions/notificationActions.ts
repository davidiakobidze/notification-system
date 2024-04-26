import {Notification} from "../../models/Notification";
import {Dispatch} from "@reduxjs/toolkit";
import notificationAPI from "../../api/notification/notification";

export enum ActionTypes {
    FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS'
}

export const fetchNotificationsRequest = (notifications: Notification[]) => ({
    type: ActionTypes.FETCH_NOTIFICATIONS,
    payload: notifications
});

export const fetchNotificationsAsync = () => {
    return async (dispatch: Dispatch): Promise<void> => {
        const notifications: Notification[] = await notificationAPI.fetch();
        dispatch(fetchNotificationsRequest(notifications));
    };
};
