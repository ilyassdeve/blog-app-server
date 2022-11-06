import { Test, TestingModule } from '@nestjs/testing';
import { PostsServiceService } from './posts-service.service';

describe('PostsServiceService', () => {
  let service: PostsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsServiceService],
    }).compile();

    service = module.get<PostsServiceService>(PostsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
