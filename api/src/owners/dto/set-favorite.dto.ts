import { Contains, IsNotEmpty, IsNumber, Matches, MinLength } from 'class-validator';

export class SetFavoriteDto {
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;
}
