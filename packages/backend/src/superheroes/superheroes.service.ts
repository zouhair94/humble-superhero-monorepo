import { Injectable } from '@nestjs/common';
import { Superhero } from 'shared';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];
  private nextId = 1;

  addSuperhero(superhero: Omit<Superhero, 'id'>): Superhero {
    const newSuperhero = { id: this.nextId++, ...superhero };
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }

  getAllSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
