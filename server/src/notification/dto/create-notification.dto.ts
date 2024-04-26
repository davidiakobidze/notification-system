import {IsNotEmpty} from 'class-validator';
import {NotificationType} from "../notification.model";

export class CreateNotificationDto {
    @IsNotEmpty()
    text: string;

    @IsNotEmpty()
    notificationType: NotificationType;
}
