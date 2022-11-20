import { IsBoolean } from 'class-validator';
import { Cat } from 'src/cats/entities/cat.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @IsBoolean()
  isFavorited: boolean;

  @OneToMany((type) => Cat, (cat) => cat.owner, { eager: true })
  cats: Cat[];
}
