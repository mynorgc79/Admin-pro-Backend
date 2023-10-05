import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Animal } from './animal.entity';
import { Biome } from './biome.entity';
import { Diet } from './diet.entity';

@Entity('species')
export class Species {
  @PrimaryGeneratedColumn('uuid')
  species_id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text')
  description: string;

  @Column('text')
  scientific_name: string;

  @OneToMany(() => Animal, (animal) => animal.species)
  animals: Animal[];

  @ManyToOne(() => Biome, (biome) => biome.species)
  biome: Biome;

  @ManyToMany(() => Diet, (diet) => diet.species)
  @JoinTable()
  diets: Diet[];

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
