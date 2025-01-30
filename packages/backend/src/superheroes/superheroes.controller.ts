/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './superheros.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.addSuperhero(createSuperheroDto);
  }

  @Get()
  getAllSuperheroes() {
    return this.superheroesService.getAllSuperheroes();
  }
}
