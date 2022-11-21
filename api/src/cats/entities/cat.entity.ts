import { Owner } from '../../owners/entities/owner.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  dob: string;

  @ManyToOne((type) => Owner, (owner) => owner.cats)
  owner: Owner;
}
