import { Test, TestingModule } from '@nestjs/testing';
import { LogincontrollerController } from './logincontroller.controller';

describe('LogincontrollerController', () => {
  let controller: LogincontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogincontrollerController],
    }).compile();

    controller = module.get<LogincontrollerController>(LogincontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
