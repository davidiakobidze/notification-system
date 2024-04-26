import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    notificationType: string;

    @CreateDateColumn({name: 'date'})
    date: Date;
}