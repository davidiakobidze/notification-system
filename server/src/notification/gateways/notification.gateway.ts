import {WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Server} from 'socket.io';

@WebSocketGateway()
export class NotificationGateway {
    @WebSocketServer()
    server: Server;

    sendNotification(): void {
        this.server.emit('notification');
    }
}