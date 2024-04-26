export class Notification {
    id: string;
    text: string;
    notificationType: NotificationType;
    date: string;

    constructor(
        id: string,
        notificationText: string,
        notificationType: NotificationType,
        date: string
    ) {
        this.text = notificationText;
        this.notificationType = notificationType;
        this.date = date;
        this.id = id;
    }
}

export enum NotificationType {
    ERROR = 'ERROR',
    INFO = 'INFO',
    WARNING = 'WARNING'
}

export type NotificationColor = {
    [key in NotificationType]: string;
};