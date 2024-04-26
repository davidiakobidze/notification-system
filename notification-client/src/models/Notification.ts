export class Notification {
    id: string;
    text: string;
    notificationType: NotificationType;
    date: Date;

    constructor(notificationText: string, notificationType: NotificationType) {
        this.text = notificationText;
        this.notificationType = notificationType;
        this.date = new Date();
        this.id = new Date().toISOString();
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