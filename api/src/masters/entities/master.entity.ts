import { Owner } from 'src/owners/entities/owner.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Master {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Owner, { eager: true })
  owner: Owner;
}
