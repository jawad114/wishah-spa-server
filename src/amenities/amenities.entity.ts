
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Services } from '../services/services.entity';
import {Room} from '../rooms/rooms.entity';

@Entity()
export class Amenities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Services, (service) => service.amenities)
  services: Services[];

  @ManyToMany(() => Room, (rooms) => rooms.amenities)
  rooms: Room[];
}
