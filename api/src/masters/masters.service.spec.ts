import { Test, TestingModule } from '@nestjs/testing';
import { MastersService } from './masters.service';

describe('MastersService', () => {
  let service: MastersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<MastersService>(MastersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
