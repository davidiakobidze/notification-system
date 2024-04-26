import React, {useState} from 'react';

import {Notification} from '../models/Notification';


type NotificationsContextObj = {
    items: Notification[];
    addNotification: (text: string, notificationType: string) => void;
    removeNotification: (id: string) => void;
};

export const NotificationsContext = React.createContext<NotificationsContextObj>({
    items: [],
    addNotification: () => {
    },
    removeNotification: (id: string) => {
    },
});


const NotificationsContextProvider = ({children}: { children: React.ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotificationHandler = (notificationText: string, notificationType: any,) => {
        const newNotification = new Notification(notificationText, notificationType);

        setNotifications((prevNotifications) => {
            return prevNotifications.concat(newNotification);
        });
    };

    const removeNotificationHandler = (notificationId: string) => {
        setNotifications((prevNotifications) => {
            return prevNotifications.filter((notification) => notification.id !== notificationId);
        });
    };

    const contextValue: NotificationsContextObj = {
        items: notifications,
        addNotification: addNotificationHandler,
        removeNotification: removeNotificationHandler,
    };

    return (
        <NotificationsContext.Provider value={contextValue}>
            {children}
        </NotificationsContext.Provider>
    );
};

export default NotificationsContextProvider;