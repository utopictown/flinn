import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SortBy } from './dto/find-query.dto';
import { Owner } from './entities/owner.entity';
import { OwnersService } from './owners.service';

describe('OwnersService', () => {
  let service: OwnersService;
  let repo: Repository<Owner>;

  const owner = new Owner();
  owner.firstName = 'A';
  owner.lastName = 'B';
  owner.id = 1;
  owner.isFavorited = true;
  owner.cats = [];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OwnersService,
        {
          provide: getRepositoryToken(Owner),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<OwnersService>(OwnersService);
    repo = module.get<Repository<Owner>>(getRepositoryToken(Owner));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of owners', async () => {
    const mockRes = {
      data: [owner],
      message: '',
      nextPage: null,
      prevPage: null,
    };
    const result = Promise.resolve([mockRes]);
    jest.spyOn(repo, 'find').mockImplementation(() => Promise.resolve([owner]));
    jest.spyOn(repo, 'count').mockImplementation(() => Promise.resolve(1));

    expect(await service.findAll({ page: '1', sortBy: SortBy.NAME })).toStrictEqual(mockRes);
  });

  it('should success set favorite', async () => {
    const mockRes = { data: '', message: 'Successfully favoriting owner' };
    const result = Promise.resolve(mockRes);
    jest.spyOn(repo, 'findOneOrFail').mockImplementation(() => Promise.resolve(owner));
    jest.spyOn(repo, 'save').mockImplementation(() => Promise.resolve(owner));

    expect(await service.addFavorite(1)).toStrictEqual(mockRes);
  });

  it('should success unfavorite', async () => {
    const mockRes = { data: '', message: 'Successfully unfavoriting owner' };
    const result = Promise.resolve(mockRes);
    jest.spyOn(repo, 'findOneOrFail').mockImplementation(() => Promise.resolve(owner));
    jest.spyOn(repo, 'save').mockImplementation(() => Promise.resolve(owner));

    expect(await service.removeFavorite(1)).toStrictEqual(mockRes);
  });

  it('should return one owner', async () => {
    const mockRes = { data: owner, message: '' };
    const result = Promise.resolve(owner);
    jest.spyOn(repo, 'findOne').mockImplementation(() => result);

    expect(await service.findOne(1)).toStrictEqual(mockRes);
  });
});
