import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Notification} from './notification/notification.entity';
import {NotificationModule} from "./notification/notification.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                type: 'postgres',
                host: config.get('POSTGRES_HOST'),
                port: parseInt(config.get('POSTGRES_PORT')),
                username: config.get('POSTGRES_USER'),
                password: config.get('POSTGRES_PASSWORD'),
                database: config.get('POSTGRES_DATABASE'),
                entities: [Notification],
                synchronize: true,
            }),
        }),
        NotificationModule,
    ],
})
export class AppModule {
}
