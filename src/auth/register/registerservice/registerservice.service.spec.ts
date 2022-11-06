import { Test, TestingModule } from '@nestjs/testing';
import { RegisterserviceService } from './registerservice.service';

describe('RegisterserviceService', () => {
  let service: RegisterserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterserviceService],
    }).compile();

    service = module.get<RegisterserviceService>(RegisterserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
