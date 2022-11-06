import { Test, TestingModule } from '@nestjs/testing';
import { CommentcontrollerController } from './commentcontroller.controller';

describe('CommentcontrollerController', () => {
  let controller: CommentcontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentcontrollerController],
    }).compile();

    controller = module.get<CommentcontrollerController>(CommentcontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
