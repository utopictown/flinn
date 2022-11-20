import { Contains, IsEnum, IsNotEmpty, IsNumber, IsOptional, Matches, MinLength, ValidateIf } from 'class-validator';

export enum SortBy {
  NAME = 'NAME',
  CATS_COUNT = 'CATS_COUNT',
}

export class FindQueryDto {
  @IsOptional()
  page?: string;

  @IsOptional()
  @IsEnum(SortBy)
  sortBy?: SortBy;
}
