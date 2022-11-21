import { Test, TestingModule } from '@nestjs/testing';
import { SortBy } from './dto/find-query.dto';
import { Owner } from './entities/owner.entity';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';

describe('OwnersController', () => {
  let controller: OwnersController;
  let ownersService: OwnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OwnersController],
      providers: [
        {
          provide: OwnersService,
          useValue: {
            addFavorite: jest.fn(),
            removeFavorite: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            response: { data: '', message: '' },
          },
        },
      ],
    }).compile();

    controller = module.get<OwnersController>(OwnersController);
    ownersService = module.get(OwnersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of owners', async () => {
    const mockRes = {
      data: [],
      message: '',
      nextPage: 2,
      prevPage: null,
    };
    const result = Promise.resolve(mockRes);
    jest.spyOn(ownersService, 'findAll').mockImplementation(() => result);

    expect(await controller.findAll({ page: '1', sortBy: SortBy.NAME })).toStrictEqual(mockRes);
  });

  it('should success set favorite', async () => {
    const mockRes = { data: [], message: '' };
    const result = Promise.resolve(mockRes);
    jest.spyOn(ownersService, 'addFavorite').mockImplementation(() => result);

    expect(await controller.setFavorite(1)).toStrictEqual(mockRes);
  });

  it('should success unfavorite', async () => {
    const mockRes = { data: [], message: '' };
    const result = Promise.resolve(mockRes);
    jest.spyOn(ownersService, 'removeFavorite').mockImplementation(() => result);

    expect(await controller.setUnfavorite(1)).toStrictEqual(mockRes);
  });

  it('should return one owner', async () => {
    const owner = new Owner();
    owner.firstName = 'A';
    owner.lastName = 'B';
    owner.id = 1;
    owner.isFavorited = true;
    owner.cats = [];
    const mockRes = { data: owner, message: '' };
    const result = Promise.resolve(mockRes);
    jest.spyOn(ownersService, 'findOne').mockImplementation(() => result);

    expect(await controller.findOne(1)).toStrictEqual(mockRes);
  });
});
