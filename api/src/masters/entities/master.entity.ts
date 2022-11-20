import { Owner } from 'src/owners/entities/owner.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Master {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Owner, { eager: true })
  @JoinColumn({ name: 'ownerId' })
  owner: Owner;
}
