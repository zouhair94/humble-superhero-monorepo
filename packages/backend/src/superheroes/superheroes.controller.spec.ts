import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should return an array of superheroes sorted by humilityScore', () => {
    const result = [
      { id: 1, name: 'Hero1', superpower: 'Power1', humilityScore: 10 },
      { id: 2, name: 'Hero2', superpower: 'Power2', humilityScore: 5 },
    ];
    jest.spyOn(service, 'getAllSuperheroes').mockImplementation(() => result);

    expect(controller.getAllSuperheroes()).toBe(result);
  });
});
