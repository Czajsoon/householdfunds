import {Injectable} from '@angular/core';
import Recipe from "../models/Recipe";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailService {

  private _recipes: Recipe[] = [
    {
      id: "123",
      dateTime: new Date(Date.now()),
      payment: {name: "Gotówka", fromSystem: true},
      totalPrice: 8,
      type: {name: "Zakupy", fromSystem: true},
      totalQuantity: 3,
      items: [{quantity: 2, product: {name: "Jabłko", price: 2}}, {
        quantity: 1,
        product: {name: "Pomarańcza", price: 4}
      }]
    },
    {
      id: "133",
      dateTime: new Date(Date.now()),
      payment: {name: "Karta", fromSystem: true},
      totalQuantity: 1,
      type: {name: "Zakupy", fromSystem: true},
      totalPrice: 4,
      items: [{quantity: 1, product: {name: "Pomarańcza", price: 4}}]
    }
  ]

  private _recipe: Recipe;

  constructor(private messageService: MessageService) {
  }

  public save(date: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Zapisano',
      detail: 'Pomyślnie zapisano zmiany paragonu z dnia: ' + date + "!"
    });
  }

  public addRecipe(date: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Zapisano',
      detail: 'Pomyślnie dodano paragon na dzień: ' + date + "!"
    });
  }

  get recipe() {
    return this._recipe;
  }

  set recipe(recipe) {
    this._recipe = recipe;
  }

  get recipes() {
    return this._recipes;
  }

  delete(index: number) {
    this._recipes.splice(index, 1);
  }


}
