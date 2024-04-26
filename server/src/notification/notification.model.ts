export class Notification {
    id: string;
    text: string;
    notificationType: NotificationType;
    date: Date;
}

export enum NotificationType {
    ERROR = 'ERROR',
    INFO = 'INFO',
    WARNING = 'WARNING'
}
