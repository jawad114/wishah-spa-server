import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Amenities } from './../amenities/amenities.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isThirdParty: boolean; // Changed to boolean

  @ManyToMany(() => Amenities, (amenity) => amenity.rooms, { eager: true }) // Eager loading to automatically include amenities
  @JoinTable()
  amenities: Amenities[];
}
