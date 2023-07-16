import { Test, TestingModule } from '@nestjs/testing';
import { SolcialnetworksService } from './solcialnetworks.service';

describe('SolcialnetworksService', () => {
  let service: SolcialnetworksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolcialnetworksService],
    }).compile();

    service = module.get<SolcialnetworksService>(SolcialnetworksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
