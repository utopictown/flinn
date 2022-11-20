import { Contains, IsNotEmpty, IsNumber, Matches, MinLength } from 'class-validator';

export class SetMasterDto {
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;
}
