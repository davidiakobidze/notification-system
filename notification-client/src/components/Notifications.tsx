import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NotificationItem from './NotificationItem';
import classes from './Notifications.module.css';
import {RootState} from "../store/store";
import {Notification} from "../models/Notification";
import {Dispatch} from "@reduxjs/toolkit";
import {fetchNotificationsAsync} from "../store/actions/notificationActions";
import io from 'socket.io-client';
import {API_URL} from '../api/notification/notification'


const Notifications: React.FC = () => {
    const notifications: Notification[] = useSelector((state: RootState) => state.notification.notifications);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(fetchNotificationsAsync())
    }, [dispatch])

    useEffect(() => {
        const socket = io(
            API_URL,
            {transports: ['websocket']}
        );

        socket.on('notification', () => {
            dispatch(fetchNotificationsAsync())
        });

        return () => {
            socket.disconnect();
        };
    }, [dispatch]);


    return (
        <>
            <h1 className={classes.header}>Notifications</h1>
            <ul className={classes.notifications}>
                {notifications.map((notification: Notification) => (
                    <NotificationItem
                        key={notification.id}
                        notification={notification}
                    />
                ))}
            </ul>
        </>
    );
};

export default Notifications;
