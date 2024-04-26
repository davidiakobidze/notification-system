import {Module} from '@nestjs/common';
import {NotificationController} from './notification.controller';
import {NotificationService} from './notification.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Notification} from './notification.entity';
import {NotificationGateway} from "./gateways/notification.gateway";

@Module({
    imports: [TypeOrmModule.forFeature([Notification])],
    controllers: [NotificationController],
    providers: [NotificationService, NotificationGateway],
    exports: [NotificationGateway],
})
export class NotificationModule {
}
