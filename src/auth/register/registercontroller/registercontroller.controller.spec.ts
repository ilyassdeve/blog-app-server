import { Test, TestingModule } from '@nestjs/testing';
import { RegistercontrollerController } from './registercontroller.controller';

describe('RegistercontrollerController', () => {
  let controller: RegistercontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistercontrollerController],
    }).compile();

    controller = module.get<RegistercontrollerController>(RegistercontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
