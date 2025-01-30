import { Body, Controller, Post, Get } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { Superhero } from 'shared';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(@Body() superhero: Omit<Superhero, 'id'>): Superhero {
    return this.superheroesService.addSuperhero(superhero);
  }

  @Get()
  getAllSuperheroes(): Superhero[] {
    return this.superheroesService.getAllSuperheroes();
  }
}
