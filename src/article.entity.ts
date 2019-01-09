import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export default class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

   @Column()
  content: string;
}
