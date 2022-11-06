import { Test, TestingModule } from '@nestjs/testing';
import { CommentserviceService } from './commentservice.service';

describe('CommentserviceService', () => {
  let service: CommentserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentserviceService],
    }).compile();

    service = module.get<CommentserviceService>(CommentserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
