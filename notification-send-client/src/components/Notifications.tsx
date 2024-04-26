import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NotificationItem from './NotificationItem';
import classes from './Notifications.module.css';
import {RootState} from "../store/store";
import {Notification} from "../models/Notification";
import {
    deleteNotificationAsync,
    fetchNotificationsAsync
} from "../store/actions/notificationActions";
import {Dispatch} from "@reduxjs/toolkit";


const Notifications: React.FC = () => {
    const notifications: Notification[] = useSelector((state: RootState) => state.notification.notifications);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(fetchNotificationsAsync())
    }, [dispatch])

    const handleDelete = (id: string) => {
        dispatch(deleteNotificationAsync(id));
    };

    return (
        <ul className={classes.notifications}>
            {notifications.map((notification: Notification) => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onRemoveNotification={() => handleDelete(notification.id)}
                />
            ))}
        </ul>
    );
};

export default Notifications;
