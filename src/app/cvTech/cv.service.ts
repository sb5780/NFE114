import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';


@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[];
  constructor() {

    this.personnes = [

      new Personne(1,'Arthur ','Rimbaud',28,'man.png',777777,'Developer')
    ]
  }

  getPersonne(): Personne[] {

    return  this.personnes;

  }

  addPersonne(personne: Personne): void{

    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);

  }

  findByName(name){


  }
}
