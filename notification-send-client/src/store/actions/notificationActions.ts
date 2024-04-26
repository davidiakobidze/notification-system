import {Notification} from "../../models/Notification";
import {Dispatch} from "@reduxjs/toolkit";
import notificationAPI from "../../api/notification/notification";

export enum ActionTypes {
    ADD_NOTIFICATION = 'ADD_NOTIFICATION',
    DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
    FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS'
}

export interface AddNotificationAction {
    type: ActionTypes.ADD_NOTIFICATION;
    payload: Notification;
}

export const addNotification = (notification: Notification): AddNotificationAction => ({
    type: ActionTypes.ADD_NOTIFICATION,
    payload: notification,
});

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

export const deleteNotification = (id: string) => ({
    type: ActionTypes.DELETE_NOTIFICATION,
    payload: id
});

export const deleteNotificationAsync = (id: string) => {
    return async (dispatch: Dispatch): Promise<void> => {
        await notificationAPI.delete(id);
        dispatch(deleteNotification(id));
    };
};