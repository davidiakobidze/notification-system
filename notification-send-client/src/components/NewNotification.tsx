import React, {useRef} from 'react';
import {Notification, NotificationType} from '../models/Notification';
import classes from './NewNotification.module.css';
import {useDispatch} from 'react-redux';
import {addNotification, AddNotificationAction} from '../store/actions/notificationActions';
import {Dispatch} from "@reduxjs/toolkit";
import notificationAPI from "../api/notification/notification";

const NewNotification: React.FC = () => {
    const dispatch: Dispatch<AddNotificationAction> = useDispatch();

    const notificationTextInputRef = useRef<HTMLInputElement>(null);
    const notificationTypeRef = useRef<HTMLSelectElement>(null);

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const text: string = notificationTextInputRef.current!.value;
        const notificationType: any = notificationTypeRef.current!.value;
        if (text.trim().length === 0) {
            return;
        }
        const notification: Notification = await notificationAPI.create(text, notificationType)

        dispatch(addNotification(notification));
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Send notification</label>
            <input type='text' id='text' ref={notificationTextInputRef}/>
            <select id="dropdown" ref={notificationTypeRef}>
                <option value={NotificationType.INFO}>INFO</option>
                <option value={NotificationType.WARNING}>WARNING</option>
                <option value={NotificationType.ERROR}>ERROR</option>
            </select>
            <button>Send</button>
        </form>
    );
};

export default NewNotification;
