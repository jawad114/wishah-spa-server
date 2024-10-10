import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Amenities } from './../amenities/amenities.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isThirdParty: boolean; 

  @ManyToMany(() => Amenities, (amenity) => amenity.rooms, { cascade: true })
  @JoinTable()
  amenities: Amenities[];
}
