import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Amenities } from '../amenities/amenities.entity';

@Entity()
export class Services {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serviceName: string;

  @Column('decimal')
  servicePrice: number;

  @Column()
  requiredTherapist: string;

  @Column({ default: 10 }) 
  duration: number;

  @ManyToMany(() => Amenities, (amenity) => amenity.services, { cascade: true })
  @JoinTable()
  amenities: Amenities[];
}
