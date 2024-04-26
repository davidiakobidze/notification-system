import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Notification} from './notification.entity';
import {CreateNotificationDto} from "./dto/create-notification.dto";
import {NotificationGateway} from "./gateways/notification.gateway";

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private readonly notificationRepository: Repository<Notification>,
        private readonly notificationGateway: NotificationGateway
    ) {
    }

    async createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification> {
        const {text, notificationType} = createNotificationDto
        const notification: Notification = this.notificationRepository.create({text, notificationType});
        const response = await this.notificationRepository.save(notification)
        this.notificationGateway.sendNotification();
        return response
    }

    async getAllNotifications(): Promise<Notification[]> {
        return this.notificationRepository.find();
    }

    async deleteNotification(id: string): Promise<void> {
        await this.notificationRepository.delete(id);
        this.notificationGateway.sendNotification();
    }
}