import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {NotificationService} from './notification.service';
import {CreateNotificationDto} from "./dto/create-notification.dto";
import {Notification} from "./notification.entity";

@Controller('notifications')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {
    }

    @Post()
    createNotification(@Body() CreateNotificationDto: CreateNotificationDto): Promise<Notification> {
        return this.notificationService.createNotification(CreateNotificationDto);
    }

    @Get()
    getAllNotifications(): Promise<Notification[]> {
        return this.notificationService.getAllNotifications();
    }

    @Delete(':id')
    deleteNotification(@Param('id') id: string): Promise<void> {
        return this.notificationService.deleteNotification(id);
    }
}