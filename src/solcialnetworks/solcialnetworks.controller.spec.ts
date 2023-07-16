import { Test, TestingModule } from '@nestjs/testing';
import { SolcialnetworksController } from './solcialnetworks.controller';
import { SolcialnetworksService } from './solcialnetworks.service';

describe('SolcialnetworksController', () => {
  let controller: SolcialnetworksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolcialnetworksController],
      providers: [SolcialnetworksService],
    }).compile();

    controller = module.get<SolcialnetworksController>(SolcialnetworksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
