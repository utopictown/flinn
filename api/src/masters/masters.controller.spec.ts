import { Test, TestingModule } from '@nestjs/testing';
import { MastersController } from './masters.controller';
import { MastersService } from './masters.service';

describe('MastersController', () => {
  let controller: MastersController;
  let service: MastersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MastersController],
      providers: [
        {
          provide: MastersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            response: { data: '', message: '' },
          },
        },
      ],
    }).compile();

    controller = module.get<MastersController>(MastersController);
    service = module.get<MastersService>(MastersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of masters', async () => {
    const mockRes = {
      data: {},
      message: '',
    };
    const result = Promise.resolve(mockRes);
    jest.spyOn(service, 'findAll').mockImplementation(() => result);

    expect(await controller.findAll()).toStrictEqual(mockRes);
  });

  it('should add master', async () => {
    const mockRes = {
      data: '',
      message: '',
    };
    const result = Promise.resolve(mockRes);
    jest.spyOn(service, 'create').mockImplementation(() => result);

    expect(await controller.create({ ownerId: 1 })).toStrictEqual(mockRes);
  });
});
