import classes from './Notificationtem.module.css';
import React from "react";
import {Notification, NotificationColor, NotificationType} from "../models/Notification";
import dateformat from "dateformat";

const notificationColor: NotificationColor = {
    [NotificationType.ERROR]: 'red',
    [NotificationType.INFO]: 'blue',
    [NotificationType.WARNING]: 'yellow',
};
const NotificationItem: React.FC<{ notification: Notification; onRemoveNotification: () => void }> = (props) => {
    const {notificationType, text, date} = props.notification
    const color = notificationColor[notificationType]
    return (
        <>
            <li className={classes.item} style={{border: `2px solid ${color}`}}>
                <div style={{width: '80%'}}>
                    {text}
                </div>
                <div style={{width: '20%'}}>
                    {dateformat(date, 'mmmm dS yyyy HH:MM')}
                </div>
            </li>
            <button className={`${classes.button} ${classes.deleteButton} `} onClick={props.onRemoveNotification}>DELETE</button>
        </>
    );
};

export default NotificationItem;
