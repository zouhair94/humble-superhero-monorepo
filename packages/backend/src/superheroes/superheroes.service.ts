import { Injectable } from '@nestjs/common';
import { Superhero } from 'shared';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];
  private nextId = 1;

  /**
   * @description - add anew superhero
   * @param superhero - String
   * @returns new [superhero]
   */
  addSuperhero(superhero: Omit<Superhero, 'id'>): Superhero {
    const newSuperhero = { id: this.nextId++, ...superhero };
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }

  /**
   * @description - sort the superheros by humility score and return superheros
   * @returns - superheros
   */
  getAllSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
