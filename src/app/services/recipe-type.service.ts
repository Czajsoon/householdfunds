import {Injectable} from '@angular/core';
import Type from "../models/Type";

@Injectable({
  providedIn: 'root'
})
export class RecipeTypeService {

  private _recipeTypes: Type[] = [
    {name: "Zakupy", fromSystem: true},
    {name: "Rachunek za gaz", fromSystem: true}
  ]

  constructor() {
  }

  get types() {
    return this._recipeTypes;
  }

  addType(name: string) {
    this._recipeTypes.push({name: name, fromSystem: false})
  }

  delete(index: number) {
    this._recipeTypes.splice(index, 1);
  }
}
