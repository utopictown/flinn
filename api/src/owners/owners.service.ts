import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SetFavoriteDto } from './dto/set-favorite.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Owner } from './entities/owner.entity';
import { FindQueryDto, SortBy } from './dto/find-query.dto';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private ownersRepository: Repository<Owner>,
  ) {}

  private response: { data: any; message: string } = { data: '', message: '' };

  async addFavorite(id: number) {
    const owners = await this.ownersRepository.findOneOrFail({ where: { id } });
    owners.isFavorited = true;
    this.ownersRepository.update({ id }, owners);

    return { ...this.response, message: 'Successfully favoriting owner' };
  }

  async removeFavorite(id: number) {
    const owners = await this.ownersRepository.findOneOrFail({ where: { id } });
    owners.isFavorited = false;
    this.ownersRepository.update({ id }, owners);

    return { ...this.response, message: 'Successfully unfavoriting owner' };
  }

  async findAll(query: FindQueryDto) {
    let result = [];
    let sortBy = {};
    let isSortByCatsCount = false;

    const limit = 3;
    const skip = ((Number(query.page) ? Number(query.page) : 1) - 1) * limit;

    if (query.sortBy) {
      if (query.sortBy === SortBy.NAME) {
        sortBy = { firstName: 'ASC' };
      }
      if (query.sortBy === SortBy.CATS_COUNT) {
        isSortByCatsCount = true;
      }
    }

    if (!isSortByCatsCount) {
      const owners = await this.ownersRepository.find({
        skip: skip,
        take: limit,
        order: sortBy,
      });
      result = owners;
    } else {
      const owners = await this.ownersRepository.find();
      result = owners.sort((curr, next) => next.cats.length - curr.cats.length).slice(skip, skip + limit);
    }

    const ownersCount = await this.ownersRepository.count();

    const nextPage = skip + limit < ownersCount ? (query.page ? Number(query.page) : 1) + 1 : null;
    const prevPage = skip > 0 ? (query.page ? Number(query.page) : 1) - 1 : null;

    return { ...this.response, data: result, nextPage, prevPage };
  }

  async findOne(identifier: number) {
    const result = await this.ownersRepository.findOne({ where: { id: identifier } });

    return { ...this.response, data: result };
  }
}
